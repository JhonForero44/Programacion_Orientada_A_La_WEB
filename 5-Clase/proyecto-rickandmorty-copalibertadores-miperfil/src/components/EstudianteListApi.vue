<template>
    <div>
        <div v-if="estudiantes.length">
            <EstudianteCard v-for="(estudiante, index) in estudiantes" :key="index" :estudiante="estudiante" />
        </div>
        <p v-else>Cargando datos...</p>
    </div>
</template>

<script>
import axios from "axios";
import EstudianteCard from "@/components/EstudianteCard.vue";

const JsonLocal = "/data/informacion.json";

export default {
    components: {
        EstudianteCard,
    },
    data() {
        return {
            estudiantes: [],
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
                this.estudiantes = response.data;
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            }
        },
    },
};
</script>