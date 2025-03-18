<template>
    <nav class="nav-header">
        <router-link to="/rickandmorty">Rick And Morty</router-link>
        <router-link to="/copalibertadores">Copa Libertadores</router-link>
        <router-link to="/myprofile">Mi Perfil</router-link>
    </nav>
</template>

<style scoped>
/* 🔹 Menú de navegación */
.nav-header {
    display: flex;
    justify-content: center;
    gap: 20px;
    background-color: #181818;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    position: relative;
}

/* 🔹 Estilo correcto para los enlaces */
.nav-header a {
    display: inline-block;
    text-decoration: none;
    background: linear-gradient(135deg, #f6c90e, #d4af37);
    /* Dorado elegante */
    color: #FFF;
    border: none;
    padding: 12px 25px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* 🔹 Efecto hover */
.nav-header a:hover {
    background: linear-gradient(135deg, #e8b923, #b08a3c);
    transform: scale(1.1);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}

</style>