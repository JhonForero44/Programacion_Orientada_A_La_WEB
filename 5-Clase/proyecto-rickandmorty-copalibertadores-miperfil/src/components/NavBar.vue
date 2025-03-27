<template>
  <nav class="nav-header">
    <div class="menu-toggle" @click="toggleMenu">
      ☰
    </div>
    <div class="nav-links" :class="{ 'show-menu': menuOpen }">
      <router-link to="/" @click="closeMenu">Rick And Morty</router-link> 
      <router-link to="/copalibertadores" @click="closeMenu">Copa Libertadores</router-link> 
      <router-link to="/myprofile" @click="closeMenu">Mi Perfil</router-link> 
    </div>
  </nav>  
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
  /* 🔹 Menú de navegación */
.nav-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  padding: 15px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1000; /* Asegura que el menú quede por encima */
}

/* 🔹 Botón hamburguesa */
.menu-toggle {
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
}

/* 🔹 Contenedor de enlaces */
.nav-links {
  display: flex;
  gap: 20px;
}

/* 🔹 Estilos de los enlaces */
.nav-links a {
  text-decoration: none;
  background: linear-gradient(135deg, #f6c90e, #d4af37);
  color: white;
  padding: 12px 25px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* 🔹 Efecto hover */
.nav-links a:hover {
  background: linear-gradient(135deg, #e8b923, #b08a3c);
  transform: scale(1.1);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}

/* 🔹 Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block; /* Muestra el botón hamburguesa */
  }
  
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #181818;
    padding: 10px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  .nav-links.show-menu {
    display: flex;
  }

  .nav-links a {
    display: block;
    padding: 15px;
    text-align: center;
  }
}
</style>
