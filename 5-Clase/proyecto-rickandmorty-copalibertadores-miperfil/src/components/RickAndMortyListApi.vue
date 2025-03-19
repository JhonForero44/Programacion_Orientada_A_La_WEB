<template>
  <div>
    <h1>Personajes de Rick and Morty</h1>
    <div class="characters-container">
      <CharacterCard 
        v-for="(character, index) in characters" 
        :key="character.id" 
        :character="character" 
        :index="index + 1"
      />
    </div>
  </div>
</template>


<script>
import CharacterCard from "./RickAndMortyCard.vue";
export default {
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    async fetchCharacters() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) {
          throw new Error("Error al obtener los personajes");
        }
        const data = await response.json();
        this.characters = data.results;
      } catch (error) {
        console.error("Hubo un problema al obtener los datos:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Título */
h1 {
  text-align: center;
}

/* Contenedor de personajes */
.characters-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .characters-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .characters-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .characters-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
