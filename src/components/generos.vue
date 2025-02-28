<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "Generos",
      generos: []
    }
  },
  async mounted() {
    let res = await axios.get("http://localhost:8085/generos")
    console.log(res)
    this.generos = res.data
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
    <tr v-for="single in generos">
      <td>{{single.id}}</td>
      <td>{{single.name}}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>