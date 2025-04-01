<script setup>
import { ref, onMounted } from 'vue';
import { getUsuarios, createUsuario, updateUsuario, deleteUsuario } from '@/services/api';

const usuarios = ref([]);
const nombre = ref('');
const email = ref('');
const editando = ref(false);
const usuarioId = ref(null);

const cargarUsuarios = async () => {
  usuarios.value = await getUsuarios();
};

const agregarUsuario = async () => {
  if (!nombre.value || !email.value) return;
  if (editando.value) {
    await updateUsuario(usuarioId.value, { nombre: nombre.value, email: email.value });
    editando.value = false;
  } else {
    await createUsuario({ nombre: nombre.value, email: email.value });
  }
  nombre.value = '';
  email.value = '';
  await cargarUsuarios();
};

const editarUsuario = (usuario) => {
  nombre.value = usuario.nombre;
  email.value = usuario.email;
  usuarioId.value = usuario.id;
  editando.value = true;
};

const eliminarUsuario = async (id) => {
  await deleteUsuario(id);
  await cargarUsuarios();
};

onMounted(cargarUsuarios);
</script>

<template>
  <div class="container">
    <h1>Gestión de Usuarios</h1>
    <form @submit.prevent="agregarUsuario">
      <input v-model="nombre" placeholder="Nombre" required />
      <input v-model="email" placeholder="Email" required />
      <button type="submit">{{ editando ? 'Actualizar' : 'Agregar' }}</button>
    </form>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }} - {{ usuario.email }}
        <button @click="editarUsuario(usuario)">✏️</button>
        <button @click="eliminarUsuario(usuario.id)">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
input {
  display: block;
  margin: 5px auto;
  padding: 8px;
}
button {
  margin: 5px;
  padding: 8px;
  cursor: pointer;
}
</style>
