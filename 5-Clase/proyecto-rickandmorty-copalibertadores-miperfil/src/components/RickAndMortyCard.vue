<template>
  <div class="character-card" @click="goToCharacter">
    <h3>Id: {{ character.id }}</h3>
    <h3>Nombre: {{ character.name }}</h3>
    <h3>Especie: {{ character.species }}</h3>
    <h3>Género: {{ character.gender }}</h3>
    <img :src="character.image" :alt="character.name" />
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToCharacter() {
      this.$router.push({ name: "PersonajeCapitulo", params: { id: this.character.id } });
    },
  },
};
</script>

<style scoped>
.character-card {
  background-color: rgba(224, 218, 163, 0.8);
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.character-card:hover {
  transform: scale(1.05);
}

img {
  width: 150px;
  border-radius: 8px;
}

</style>
