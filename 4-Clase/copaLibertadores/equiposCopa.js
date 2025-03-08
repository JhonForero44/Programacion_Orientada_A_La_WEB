const JsonLocal = '../json/equiposLibertadores.json';  

// Función para obtener los archivos desde el JSON
function getFilesFromApi() {
    fetch(JsonLocal)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar los datos");
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos obtenidos:', data);
            createCharacterCards(data);
        })
        .catch(error => {
            console.error("Hubo un problema con la operación fetch:", error);
        });
}

// Función para crear las tarjetas de equipos
function createCharacterCards(equipos) {
    const charactersContainer = document.getElementById("charactersContainer");

    if (Array.isArray(equipos)) {
        equipos.forEach(equipo => {
            // Crear la tarjeta principal
            const card = document.createElement("div");
            card.classList.add("character-card");

            // Contenedor interno para permitir el giro
            const cardInner = document.createElement("div");
            cardInner.classList.add("card-inner");

            // Lado frontal de la tarjeta (con información y escudo)
            const cardFront = document.createElement("div");
            cardFront.classList.add("card-front");
            cardFront.innerHTML = `
                <h4>Nombre: ${equipo.nombre}</h4>
                <h4>País: ${equipo.pais}</h4>
                <h4>Títulos: ${equipo.títulos}</h4>
                <h4>Estadio: ${equipo.estadio}</h4>
                <h4>Última vez Campeón: ${equipo.último_campeón}</h4>
                <img src="${equipo.escudo}" alt="Escudo de ${equipo.nombre}" class="team-logo">
            `;

            // Lado trasero (imagen personalizada)
            const cardBack = document.createElement("div");
            cardBack.classList.add("card-back");

            // Imagen (la agregarás tú después)
            const imageCustom = document.createElement("img");
            imageCustom.src = equipo.imgCampeon; // Aquí puedes cambiar la imagen

            cardBack.appendChild(imageCustom);

            // Agregar lados a la tarjeta interna
            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);

            // Evento de clic para girar la tarjeta
            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });

            // Agregar la tarjeta al contenedor
            charactersContainer.appendChild(card);
        });
    } else {
        console.error('La propiedad "equipos" no es un array');
    }
}

// Llamar a la función para obtener los equipos del JSON
getFilesFromApi();
