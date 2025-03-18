<template>
  <div class="character-card" :style="{ backgroundImage: `url('${equipo.fondoGif}')` }" @click="voltear">
    <div class="card-inner" :class="{ flipped: volteado }">
      <!-- Lado frontal -->
      <div class="card-front">
        <p><strong>Nombre:</strong> {{ equipo.nombre }}</p>
        <p><strong>País:</strong> {{ equipo.pais }}</p>
        <p><strong>Títulos:</strong> {{ equipo.títulos }}</p>
        <p><strong>Estadio:</strong> {{ equipo.estadio }}</p>
        <p><strong>Última vez Campeón:</strong> {{ equipo.último_campeón }}</p>
        <img :src="equipo.escudo" :alt="'Escudo de ' + equipo.nombre" class="team-logo">
      </div>

      <!-- Lado trasero -->
      <div class="card-back">
        <img :src="equipo.imgCampeon" alt="Imagen del campeón">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    equipo: Object,
  },
  data() {
    return {
      volteado: false,
    };
  },
  methods: {
    voltear() {
      this.volteado = !this.volteado;
    },
  },
};
</script>

<style scoped>
/* Fuente moderna */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.character-card {
  perspective: 1000px;
  width: 250px;
  height: 350px;
  cursor: pointer;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
}

.character-card p {
  color: #FFD700; /* Amarillo dorado */
  font-size: 14px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  border: 2px solid #b8860b;
  box-shadow: 0px 4px 10px rgba(255, 215, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  word-wrap: break-word;
  line-height: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-front {
  background-color: transparent;
  color: white;
}

.card-back {
  background-color: rgba(0, 0, 0, 0.85);
  transform: rotateY(180deg);
}

.card-back img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  margin: auto;
}

.team-logo {
  width: 60px;
  height: auto;
  margin-top: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .character-card {
    width: 200px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .character-card {
    width: 180px;
    height: 280px;
  }
}
</style>
