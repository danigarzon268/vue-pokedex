<template>
  <div class="relative flex items-center">
    <div class="content-pokemon" @click="$emit('pokemonSel', pokemon)">
      <div>
        <span class="capitalize">{{ pokemon.name }}</span>
      </div>
    </div>
    <div class="absolute right-3">
      <app-button
        extraClass="white-secondary btn-icon-fav"
        icon="star-active.png"
        classIcon="w-6"
        @click="$emit('btnFavorite', pokemon)"
        :class="{ active: pokemon._isFavorite }"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "app-pokemon",
  props: {
    pokemon: { type: Object, required: true }
  }
};
</script>
<style lang="scss" scope>
.content-pokemon {
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 17px 20px;
  margin: 5px 0;
  cursor: pointer;
  width: 100%;
}
.btn-icon-fav {
  padding: 9px;
  filter: grayscale(1);

  &:hover,
  &.active {
    filter: grayscale(0);
    filter: none;
    background: var(--color-secundary-white);
  }
}
</style>
