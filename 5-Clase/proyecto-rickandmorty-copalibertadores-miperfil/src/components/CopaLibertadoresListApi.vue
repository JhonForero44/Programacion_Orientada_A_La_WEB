<template>
  <!-- 🔹 Video de fondo -->
  <video class="video-bg" autoplay loop muted playsinline>
    <source src="/data/intro_conmebol_libertadores.webm" type="video/webm">
    Tu navegador no soporta videos en HTML5.
  </video>
  <div class="libertadores-container">
    <div v-if="equipos.length > 0" class="characters-container">
      <EquiposCard v-for="equipo in equipos" :key="equipo.nombre" :equipo="equipo" />
    </div>

    <p v-else>Cargando equipos...</p>
  </div>
</template>s

<script>
import axios from "axios";
import EquiposCard from "./CopaLibertadoresCard.vue";

const JsonLocal = '/data/equiposLibertadores.json' // Importamos el JSON

export default {
  components: {
    EquiposCard,
  },
  data() {
    return {
      equipos: [],
    };
  },
  mounted() {
    this.cargarDatos();
  },
  methods: {
    async cargarDatos() {
      try {
        const response = await axios.get(JsonLocal);
        console.log("Datos obtenidos:", response.data);
        this.equipos = response.data;
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    },
  },
};
</script>

<style scoped>
.characters-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-content: center;
  place-items: center;
  padding: 50px 20px;
}

.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Responsive */
@media (max-width: 768px) {
  .characters-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .characters-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
}
</style>