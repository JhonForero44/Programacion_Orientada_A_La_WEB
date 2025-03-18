<template>
  <div class="card-inner" :class="{ flipped: volteado }">
    <p><strong>Nombre:</strong> {{ personaje.name }}</p>
    <p><strong>Especie:</strong> {{ personaje.species }}</p>
    <p><strong>Genero:</strong> {{ personaje.gender }}</p>
    <img :src="personaje.imageElement" :alt="'Escudo de ' + personaje.nameId">
  </div>
</template>

<script>
export default {
  props: {
    personaje: Object,
  },
  data() {
    return {
      volteado: false,
    };
  }
};
</script>

<style>
</style>
