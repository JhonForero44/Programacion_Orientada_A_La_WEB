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
.characters-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  /* Aumenta separación entre las cartas */
  justify-content: center;
  place-items: center;
  padding: 50px 20px;
}

.character-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  perspective: 1000px;
  width: 250px;
  height: 350px;
  cursor: pointer;
  margin-bottom: 30px;
  /* Espacio entre tarjetas en columnas */
}

.character-card p {
  color: #FFD700;
  /* Amarillo dorado */
  font-size: 14px;
  /* Un poco más grande */
  /* Negrita */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  /* Sombra negra para destacar */
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.card-inner.flipped {
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
  /* ❗ Evita que el contenido empuje el fondo */
  padding: 20;
  /* ❗ Quita el padding interno */
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  word-wrap: break-word;
  line-height: 1;
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
  /* Ajusta el ancho para que ocupe todo el contenedor */
  height: auto;
  /* Mantiene la proporción de la imagen */
  object-fit: contain;
  /* Asegura que la imagen se ajuste sin recortarse */
  display: block;
  /* Elimina espacios adicionales */
  margin: auto;
  /* Centra la imagen horizontalmente */
}

.card-content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 100%;
  overflow-y: auto;
}

.team-logo {
  width: 90px;
  /* Ajusta el tamaño */
  height: auto;
  margin-top: 10px;
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
