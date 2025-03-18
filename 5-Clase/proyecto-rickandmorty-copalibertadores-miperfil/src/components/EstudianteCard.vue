<template>
    <div class="character-card">
        <img :src="estudiante.foto" alt="Foto del estudiante" v-if="estudiante.foto">
        <p><strong>Nombre:</strong> {{ estudiante.nombre }}</p>
        <p><strong>País:</strong> {{ estudiante.pais }}</p>
        <p><strong>Teléfono:</strong> {{ estudiante.telefono || 'N/A' }}</p>
        <p><strong>Edad:</strong> {{ estudiante.edad }}</p>
        <p><strong>Intereses TI:</strong> {{ estudiante.interesTecnologicos }}</p>
        <p><strong>Educación:</strong> {{ estudiante.educacion }}</p>
        <img :src="estudiante.imagesSena" alt="Sena" class="mini-img" v-if="estudiante.imagesSena">
        <p><strong>Estudios Actuales:</strong> {{ estudiante.estudiosActual }}</p>
        <img :src="estudiante.imagesUniversidad" alt="Universidad" class="mini-img" v-if="estudiante.imagesUniversidad">
    </div>
</template>

<script>
export default {
    props: {
        estudiante: Object // Recibe un estudiante como propiedad
    }
};
</script>

<style scoped>

/* 🔹 Tarjeta principal con fondo moderno */
.character-card {
    background: linear-gradient(135deg, #ffffff, #f0f4ff);
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding: 40px;
    text-align: center;
    max-width: 500px;
    margin: 30px auto;
    /* Centra la tarjeta */
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    transition: all 0.3s ease-in-out;
}

/* 🔹 Efecto Hover en la tarjeta */
.character-card:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #e3e7ff, #ffffff);
}

/* Imágenes con borde dorado */
.character-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    padding: 10px;
    background: linear-gradient(135deg, #f5c518, #d4af37);
    box-shadow: 0px 0px 10px rgba(245, 197, 24, 0.6);
    transition: all 0.3s ease-in-out;
}

/* 🔹 Hover en imágenes */
.character-card img:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(37, 117, 252, 0.7);
    background: linear-gradient(135deg, #2575fc, #6a11cb);
}

/* Textos generales */
.character-card p {
    font-size: 16px;
    line-height: 1.6;
    color: #1a1a1a;
    background: #e3e7ff;
    padding: 10px 15px;
    border-radius: 8px;
    margin: 10px 0;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

/* Hover en los textos */
.character-card p:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    color: white;
    transform: scale(1.02);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
}

/* Encabezados y detalles importantes */
.character-card strong {
    color: #2575fc;
    font-weight: 700;
}

/* Divider */
.divider {
    width: 80%;
    height: 1px;
    background-color: #ddd;
    margin: 15px auto;
}

/* Imágenes de instituciones */
.mini-img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-top: 10px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
