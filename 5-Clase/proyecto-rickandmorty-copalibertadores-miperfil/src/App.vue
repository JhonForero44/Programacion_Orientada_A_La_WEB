<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view />
  </main>
  <MiFooter />
</template>

<script>
import NavBar from './components/NavBar.vue';
import MiFooter from './components/MiFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    MiFooter
  }
}
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  background-color: #F4F4F4;
  color: #333;
  text-align: center;
  margin: 0;
  padding: 0;
  animation: fadeIn 1s ease-in-out;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
}
</style>
