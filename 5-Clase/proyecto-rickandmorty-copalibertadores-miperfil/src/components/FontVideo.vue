<template>
    <video class="video-bg" autoplay loop muted playsinline>
        <source src="/video/intro_conmebol_libertadores.webm" type="video/webm">
        Tu navegador no soporta videos en HTML5.
    </video>
</template>

<style scoped>
.video-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
</style>