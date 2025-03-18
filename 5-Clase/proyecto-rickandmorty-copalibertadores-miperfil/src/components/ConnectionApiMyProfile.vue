<template>
    <div>
      <h2>Lista de personajes</h2>
      <ul>
        <li v-for="(persona, index) in personajes" :key="index">
          <strong>{{ persona.nombre }}</strong> - {{ persona.pais }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  const JsonLocal = '/data/informacion.json'; // Ruta del archivo JSON
  import axios from 'axios';
  
  export default {
    data() {
      return {
        personajes: [] // Aquí se guardarán los datos del JSON
      };
    },
    mounted() {
      this.cargarDatos();
    },
    methods: {
      async cargarDatos() {
        try {
          const response = await axios.get(JsonLocal);        
          console.log('Datos recibidos:', response.data); // Verifica la estructura del JSON        
          this.personajes = response.data; // ✅ Directamente el array
        } catch (error) {
          console.error('Error al cargar los datos:', error);
        }
      }
    }
  };
  </script>
  