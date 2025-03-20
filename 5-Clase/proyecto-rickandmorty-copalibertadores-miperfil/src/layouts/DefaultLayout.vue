<template>
    <NavBarVue />
    <main>
        <router-view />
    </main>
    <MiFooterVue />
</template>

<script setup>
import NavBarVue from '@/components/NavBar.vue';
import MiFooterVue from '@/components/MiFooter.vue';

</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  background-color: #F4F4F4;
  color: #333;
  text-align: center;
  margin: 0;
  padding: 0;
  animation: fadeIn 1s ease-in-out;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
}
</style>
