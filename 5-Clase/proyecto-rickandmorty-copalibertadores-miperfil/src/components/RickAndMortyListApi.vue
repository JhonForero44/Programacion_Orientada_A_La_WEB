<template>
  <div>
    <h2>Lista de personajes</h2>
    <ul>
      <li v-for="(persona, index) in personajes" :key="index">
        <strong>{{ persona.name }}</strong> - {{ persona.species }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      personajes: [] // Almacena los personajes
    };
  },
  mounted() {
    this.cargarDatos();
  },
  methods: {
    async cargarDatos() {
      const apiURL = 'https://rickandmortyapi.com/api/character'; // ✅ URL correcta

      try {
        const response = await axios.get(apiURL);
        console.log('Datos recibidos:', response.data); // Imprime el JSON en consola
        this.personajes = response.data.results; // Usar `results`
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }
  }
};
</script>
