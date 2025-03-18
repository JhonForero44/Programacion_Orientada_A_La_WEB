<template>
  <nav class="nav-header">
    <router-link to="/">Home</router-link> 
    <router-link to="/rickandmorty">Rick And Morty</router-link> 
    <router-link to="/copalibertadores">Copa Libertadores</router-link> 
    <router-link to="/myprofile">Mi Perfil</router-link> 
  </nav>  
</template>

<style scoped>
/* Fuente moderna */
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
  background: linear-gradient(135deg, #f6c90e, #d4af37); /* Dorado elegante */
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

/* 🔹 Contenido principal */
#welcome-section {
  margin-top: 50px;
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(20px);
  opacity: 0;
  animation: slideUp 0.8s ease-in-out forwards;
  transition: all 0.3s ease-in-out;
}

#welcome-section:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}

/* 🔹 Títulos y párrafos */
h1 {
  font-size: 34px;
  color: #222;
  margin-bottom: 15px;
  font-weight: bold;
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: #444;
}
</style>
