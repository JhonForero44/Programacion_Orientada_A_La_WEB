<template>
  <header>
    <NavMenu />
  </header>
  <main>
    <router-view />
  </main>
  <MiFooter />
</template>

<script>
import MiFooter from './components/MiFooter.vue'
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    MiFooter,
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
