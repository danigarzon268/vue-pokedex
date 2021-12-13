<template>
  <div>
    <div class="container">
      <div class="main-container">
        <div>
          <app-input
            type="text"
            placeholder="Search"
            v-model="form.search"
            icon="search.png"
          />
        </div>

        <template v-if="visiblePokemons.length > 0">
          <div class="my-8">
            <div v-for="(pokemon, index) in visiblePokemons" :key="index">
              <app-pokemon
                :pokemon="pokemon"
                @btnFavorite="selectFavorite(pokemon)"
                @pokemonSel="pokemonSelected(pokemon)"
              />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="text-center main-title">
            <h1 class="mt-10">Uh-oh!</h1>
            <p class="mt-8">You look lost on your journey!</p>
            <app-button
              extraClass="primary mt-8"
              class="mt-8"
              @click="$router.replace({ name: 'home' })"
            >
              Go back home
            </app-button>
          </div>
        </template>
      </div>
    </div>
    <div class="footer-actions" v-if="pokemonList.length > 0">
      <div class="btn-actions">
        <app-button
          extraClass="secondary w-72 mx-2.5"
          icon="all.png"
          classIcon="w-6 mr-2.5"
          @click="activeTab('all')"
          :class="{ active: tab == 'all' }"
        >
          All
        </app-button>
        <app-button
          extraClass="secondary w-72 mx-2.5"
          icon="fav.png"
          classIcon="w-6 mr-2.5"
          @click="activeTab('fav')"
          :class="{ active: tab == 'fav' }"
        >
          Favorites
        </app-button>
      </div>
    </div>

    <app-modal ref="modalShowDetails">
      <div v-if="pokemonList.length">
        <app-pokemon-details :pokemon="pokemonDetails" />
      </div>
    </app-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { POKEMON_FETCH_LIST, POKEMON_GET_DETAILS } from "@/store/actions.type";
import { SET_POKEMON_TOGGLE_FAVORITE } from "@/store/mutations.type";
import AppPokemon from "@/components/pokemon/AppPokemon";
import AppPokemonDetails from "@/components/pokemon/AppPokemonDetails";
export default {
  data() {
    return {
      form: {
        search: ""
      },
      visiblePokemons: [],
      pokemonDetails: {},
      tab: "all"
    };
  },
  components: {
    AppPokemon,
    AppPokemonDetails
  },
  mounted() {
    this.getPokemons();
  },
  methods: {
    getPokemons() {
      this.$store.dispatch(POKEMON_FETCH_LIST).finally(() => {
        this.visiblePokemons = this.pokemonList;
      });
    },
    activeTab(type) {
      this.tab = type;
      if (this.tab === "fav") {
        this.getFavorites();
      } else {
        this.getAll();
      }
    },
    selectFavorite(pokemon) {
      this.$store.commit(SET_POKEMON_TOGGLE_FAVORITE, pokemon.name);
      this.pokemonDetails._isFavorite =  !this.pokemonDetails._isFavorite
    },
    search() {
      this.visiblePokemons = this.pokemonList.filter(pokemon => {
        return pokemon.name
          .toLowerCase()
          .includes(this.form.search.toLowerCase());
      });
    },
    getFavorites() {
      this.visiblePokemons = this.pokemonList.filter(pokemon => {
        return pokemon._isFavorite;
      });
    },
    getAll() {
      this.visiblePokemons = this.pokemonList;
    },
    pokemonSelected(pokemon) {
      
      this.$store.dispatch(POKEMON_GET_DETAILS, pokemon.name).then(result => {
        this.$refs.modalShowDetails.show();
        this.pokemonDetails = result;
        this.pokemonDetails._isFavorite = pokemon._isFavorite;

      });
    }
  },
  computed: {
    ...mapGetters(["pokemonList"])
  },
  watch: {
    "form.search"() {
      this.search();
    }
  }
};
</script>

<style type="text/css" lang="scss" scoped>
.main-title {
  text-align: center;
  max-width: 600px;
  margin: 0 30px;
}
.main-container {
  max-width: 90%;
  width: 570px;
}
.footer-actions {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  .btn-actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
