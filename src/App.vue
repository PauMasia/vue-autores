<script>
import artistas from "@/components/artistas.vue";

export default {
  name: 'App',
  components: {artistas}
}
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Artistas</router-link>
      <router-link to="/albumes">Albumes</router-link>
      <router-link to="/generos">Generos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>