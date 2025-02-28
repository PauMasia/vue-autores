<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "Artistas",
      artistas: []
    }
  },
  async mounted() {
    let res = await axios.get("http://localhost:8085/artistas")
    console.log(res)
    this.artistas = res.data
  }
}
</script>

<template>
  <h1>{{name}}</h1>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="single in artistas">
      <td>{{single.id}}</td>
      <td>{{single.name}}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>