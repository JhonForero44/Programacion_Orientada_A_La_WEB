// Función para obtener el ID del personaje desde la URL
function getCharacterIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Función para obtener la información del personaje desde la API
function fetchCharacterDetails() {
    const characterId = getCharacterIdFromUrl();
    if (!characterId) {
        console.error("No se encontró el ID del personaje en la URL");
        return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(character => {
            displayCharacterDetails(character);
        })
        .catch(error => console.error("Error obteniendo detalles del personaje:", error));
}

// Función para mostrar los detalles en la página
function displayCharacterDetails(character) {
    const characterDetail = document.getElementById("characterDetail");

    // Crear elementos para mostrar la información
    const nameElement = document.createElement("h2");
    nameElement.textContent = character.name;

    const imageElement = document.createElement("img");
    imageElement.src = character.image;
    imageElement.alt = character.name;

    const episodesElement = document.createElement("ol");
    episodesElement.textContent = "Lista de capitulos donde aparece:";

    // Obtener y mostrar los nombres de los episodios
    const episodeRequests = character.episode.map(url =>
        fetch(url).then(response => response.json())
    );

    Promise.all(episodeRequests)
        .then(episodes => {
            episodes.forEach(episode => {
                const li = document.createElement("li");
                li.textContent = episode.name; // Nombre del episodio
                episodesElement.appendChild(li);
            });
        })

    // Agregar elementos a la página
    characterDetail.appendChild(nameElement);
    characterDetail.appendChild(imageElement);
    characterDetail.appendChild(episodesElement);
}

// Llamar a la función al cargar la página
fetchCharacterDetails();

