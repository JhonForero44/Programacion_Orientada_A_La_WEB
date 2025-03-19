<template>
  <div class="character-detail" v-if="character">
    <h2>{{ character.name }}</h2>
    <img :src="character.image" :alt="character.name" />
    <h3>Lista de capítulos donde aparece:</h3>
    <ol class="episodes-list">
      <li v-for="(episode, index) in episodes" :key="index">
        {{ episode.name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: null,
      episodes: [],
    };
  },
  async created() {
    const characterId = this.$route.params.id;
    if (!characterId) return;

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
      if (!response.ok) throw new Error("Error obteniendo el personaje");
      this.character = await response.json();

      // Obtener detalles de episodios
      const episodeRequests = this.character.episode.map(url => fetch(url).then(res => res.json()));
      this.episodes = await Promise.all(episodeRequests);
    } catch (error) {
      console.error("Error obteniendo detalles del personaje:", error);
    }
  },
};
</script>

<style scoped>
.character-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.character-detail img {
  width: 80%;
  max-width: 300px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.character-detail ul {
  list-style: none;
  padding: 0;
}

.character-detail ul li {
  background-color: #f4f4f4;
  padding: 5px;
  border-radius: 5px;
  margin-top: 5px;
}
</style>