<template>
  <div class="container">
    <img src="@/assets/general/poke-welcome.png" alt="Pikachu" width="325" />
    <div class="text-center main-title">
      <h1 class="mt-10">Welcome to Pokédex</h1>
      <p class="mt-8">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <app-button
        extraClass="primary mt-8"
        @click="$router.replace({ name: 'pokemonList' })"
      >
        Get started
      </app-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style type="text/css" lang="scss" scoped>
.main-title {
  text-align: center;
  max-width: 600px;
  margin: 0 30px;
}
</style>
