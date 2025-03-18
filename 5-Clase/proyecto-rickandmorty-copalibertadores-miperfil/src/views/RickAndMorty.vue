<template>
  <h1>Rick and Morty Personajes</h1>
  <main>
    <ListaRickAndMorty />
  </main>

</template>

<script scope>
import ListaRickAndMorty from '@/components/RickAndMortyListApi.vue';

export default {
  components: {
    ListaRickAndMorty
  }
};
</script>