<template>
  <body>
    <EstudiantesList />
  </body>
</template>

<script>
import EstudiantesList from '@/components/EstudiantesList.vue';

export default {
  components: {
    EstudiantesList
  }
};
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  background: url('https://i.gifer.com/1kc1.gif') no-repeat center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

</style>