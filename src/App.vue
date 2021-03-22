<template>
  <Installment />
</template>

<script>
import Installment from "./components/Installment.vue";

export default {
  name: "App",
  components: {
    Installment,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: #f1f1f1;
}
</style>
