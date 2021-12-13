<template>
  <div>
    <div class="header-details text-center">
      <img
        v-if="
          pokemon.sprites && pokemon.sprites.other.dream_world.front_default
        "
        width="180"
        :src="pokemon.sprites.other.dream_world.front_default"
        alt="pokemon"
      />
    </div>
    <div class="box-details">
      <ul>
        <li><strong>Nombre:</strong> {{ pokemon.name }}</li>
        <li><strong>Weight:</strong> {{ pokemon.weight }}</li>
        <li><strong>Height:</strong> {{ pokemon.height }}</li>
        <li v-if="pokemon.types">
          <strong>Type: </strong>
          <div
            v-for="(type, index) in pokemon.types"
            :key="index"
            class="inline-flex"
          >
            <p v-if="type.type">{{ type.type.name }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="box-actions mb-4 relative">
      <app-button class="primary m-0" @click="sharePokemon">
        Share to my friends
      </app-button>
      <app-button
        extraClass="white-secondary btn-icon-fav m-0"
        icon="star-active.png"
        classIcon="w-6"
        @click="selectFavorite"
        :class="{ active: isFavorite }"
      />
      <div v-if="message" class="box-message absolute">
        <p>{{message}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { SET_POKEMON_TOGGLE_FAVORITE } from "@/store/mutations.type";
export default {
  name: "app-pokemon-details",
  props: {
    pokemon: { type: Object, required: true }
  },
  data() {
    return {
      isFavorite: this.pokemon._isFavorite,
      message: null
    }
  },
  methods: {
    sharePokemon() {
      let types = this.pokemon.types.map(pok => pok.type.name)
      let data = `Nombre: ${this.pokemon.name}, Altura : ${this.pokemon.height}, Peso: ${this.pokemon.weight}, Tipos : ${types}`
      navigator.clipboard.writeText(data);
      this.message = "Pokémon copied to clipboard ❤️"
      setTimeout(() => {
        this.message = null
      }, 4000);

    },
    selectFavorite() {
      this.$store.commit(SET_POKEMON_TOGGLE_FAVORITE, this.pokemon.name);
      this.isFavorite = !this.isFavorite
    }
  },
  computed: {
    ...mapGetters(["pokemonList"])
  },
  watch: {
    pokemon() {
      this.isFavorite = this.pokemon._isFavorite
      
    }
  },
 
};
</script>
<style lang="scss" scope>
.box-details {
  padding: 20px 30px;
  li {
    border-bottom: 1px solid var(--color-primary-white);
    padding: 10px 0;
    color: var(--color-paragraph-gray);
    font-size: 18px;
    text-transform: capitalize;
  }
}
.header-details {
  background-image: url("../../assets/general/background.png");
  background-size: cover;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    margin: 0 auto;
    max-height: 200px;
  }
}
.box-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
.box-message {
  background: #fff;
  padding: 6px 20px;
  bottom: 54px;
  left: 30px;
  box-shadow: 0px 0px 15px -9px #555;
  border-radius: 5px;
  p {
    font-size: 15px
  }
}
</style>
