<template>
  <FontVideo />
  <main>
    <ListaEquipos />
  </main>
</template>

<script scope>
import ListaEquipos from '@/components/CopaLibertadoresListApi.vue';
import FontVideo from '@/components/FontVideo.vue';

export default {
  components: {
    FontVideo,
    ListaEquipos
  }
};
</script>
