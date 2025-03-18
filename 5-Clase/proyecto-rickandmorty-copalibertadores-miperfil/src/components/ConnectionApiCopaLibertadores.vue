<template>
    <div>
      <h2>Lista de equipos</h2>
      <ul>
        <li v-for="(equipo, index) in equipos" :key="index">
          <strong>{{ equipo.nombre }}</strong> - {{ equipo.pais }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  const JsonLocal = '/data/equiposLibertadores.json'; // Ruta del archivo JSON
  import axios from 'axios';
  
  export default {
    data() {
      return {
        equipos: [] // Aquí se guardarán los datos del JSON
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
          this.equipos = response.data; // ✅ Directamente el array
        } catch (error) {
          console.error('Error al cargar los datos:', error);
        }
      }
    }
  };
  </script>
  