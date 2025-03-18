<template>
    <h1>Hola esta es la pagina de Rick And Morty</h1>
    <ListaRickAndMorty />
</template>

<script scope>
import ListaRickAndMorty from '@/components/ConnectionApiRickAndMorty.vue';

export default {
  components: {
    ListaRickAndMorty
  }
};
</script>