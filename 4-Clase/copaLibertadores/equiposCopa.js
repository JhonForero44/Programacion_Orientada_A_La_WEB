const JsonLocal = '../json/equiposLibertadores.json';  // Asegúrate de que el archivo JSON esté en el mismo directorio

// Función para obtener los archivos desde el API
function getFilesFromApi() {
    fetch(JsonLocal)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Mostramos los datos del archivo JSON en la consola
            console.log('Datos obtenidos:', data);
            // Usamos data.equipos en lugar de data.results
            createCharacterCards(data);
        })
        .catch((error) => {
            console.error("Hubo un problema con la operación fetch:", error);
        });
}

// Función para crear las tarjetas de personajes
function createCharacterCards(equipos) {
    // Obtenemos el contenedor de los personajes en el HTML
    const charactersContainer = document.getElementById("charactersContainer");

    // Verificamos si equipos es un array válido
    if (Array.isArray(equipos)) {
        // Recorremos cada equipo y creamos su tarjeta
        equipos.forEach((equipo) => {
            // Creamos un elemento div para la tarjeta del equipo  
            const card = document.createElement("div");
            card.classList.add("character-card");

            // Creamos un elemento H3 para mostrar el nombre del equipo
            const nameTeam = document.createElement("H3");
            nameTeam.textContent = `Nombre: ${equipo.nombre}`;

            // Creamos un elemento H3 para mostrar el país del equipo
            const namePais = document.createElement("H3");
            namePais.textContent = `País: ${equipo.pais}`;

            // Creamos un elemento H3 para mostrar los títulos ganados
            const numTitulos = document.createElement("H3");
            numTitulos.textContent = `Títulos: ${equipo.títulos}`;

            // Creamos un elemento H3 para mostrar el estadio del equipo
            const nameEstadio = document.createElement("H3");
            nameEstadio.textContent = `Estadio: ${equipo.estadio}`;


            // Creamos un elemento H3 para mostrar el estadio del equipo
            const nameUltimoCampeon = document.createElement("H3");
            nameUltimoCampeon.textContent = `Estadio: ${equipo.último_campeón}`;

            // Creamos un elemento img para el escudo del equipo (suponiendo que cada equipo tiene una imagen)
            const imageEscudo = document.createElement("img");
            imageEscudo.src = equipo.escudo || '';  // Asegúrate de que el campo 'image' existe

            // Agregamos los elementos a la tarjeta
            card.appendChild(nameTeam);
            card.appendChild(namePais);
            card.appendChild(numTitulos);
            card.appendChild(nameEstadio);
            card.appendChild(nameUltimoCampeon);
            card.appendChild(imageEscudo);

            // Agregamos la tarjeta al contenedor
            charactersContainer.appendChild(card);
        });
    } else {
        console.error('La propiedad "equipos" no es un array');
    }
}

// Llamamos a la función para obtener los equipos del archivo JSON
getFilesFromApi();