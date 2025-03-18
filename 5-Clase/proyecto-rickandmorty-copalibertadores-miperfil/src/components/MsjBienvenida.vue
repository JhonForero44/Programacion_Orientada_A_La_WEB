<template>
    <section id="welcome-section">
        <h1>Bienvenido</h1>
        <p>
            Usted podrá acceder a la información de <strong>Rick And Morty</strong>,
            <strong>Campeones Copa Libertadores</strong> y <strong>Mi Perfil</strong>.
        </p>
        <p>Seleccione una opción del menú para comenzar.</p>
    </section>
</template>

<style scoped>
#welcome-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 250px); /* Ajusta para dejar espacio */
    width: 50%;
    margin: 50px auto; /* Agrega margen superior e inferior */
    background: white;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    padding: 30px;
    opacity: 1;
    transform: translateY(20px);
    animation: slideUp 0.8s ease-in-out forwards;
    transition: all 0.3s ease-in-out;
}

h1 {
    font-size: 28px; /* Reduce un poco el tamaño del título */
    text-align: center; /* Asegura que el título esté centrado */
}

p {
    font-size: 16px; /* Reduce un poco el tamaño del texto */
    text-align: center; /* Centra el texto */
}


#welcome-section:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
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
