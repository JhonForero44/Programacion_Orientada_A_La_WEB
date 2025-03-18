<template>
    <div>
        <h1>Hola esta es la pagina de Copa Libertadores</h1>
        <ListaEquipos />
    </div>
  </template>

<script scope>
import ListaEquipos from '@/components/ConnectionApiCopaLibertadores.vue';

export default {
  components: {
    ListaEquipos
  }
};
</script>