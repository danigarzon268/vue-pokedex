<template>
  <div>
    <div class="container">
      <img src="@/assets/general/poke-welcome.png" alt="Pikachu" width="325" />
      <div class="text-center main-title">
        <h1 class="mt-10">Ooops!</h1>
        <p class="mt-8">
          Page not found.😩
        </p>
        <app-button
          extraClass="primary mt-8"
          @click="$router.replace({ name: 'home' })"
        >
          Go to home
        </app-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
