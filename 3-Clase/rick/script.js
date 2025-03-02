const apiUrl = "https://rickandmortyapi.com/api/character";

// Función para obtener los archivos desde el API
function getFilesFromApi() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Llamamos a la función para crear las tarjetas de personajes
      console.log('valores de rick',data);
      createCharacterCards(data.results);
    })
    .catch((error) => {
      console.error("Hubo un problema con la operación fetch:", error);
    });
}

// Función para crear las tarjetas de personajes
function createCharacterCards(characters) {
  // Obtenemos el contenedor de los personajes en el HTML
  const charactersContainer = document.getElementById("charactersContainer");
  // Recorremos cada personaje y creamos su tarjeta
  characters.forEach((character) => {
    // Creamos un elemento div para la tarjeta del personaje
    const card = document.createElement("div");
    card.classList.add("character-card");
    // Creamos un elemento p para mostrar el nombre del personaje
    const nameElement = document.createElement("H1");
    nameElement.textContent = character.status;
      // Creamos un elemento img para la imagen del personaje
      console.log(character)
      const imageElement = document.createElement("img");
      imageElement.src = character.image;
    console.log(character.image);
    // Agregamos el nombre del personaje al div de la tarjeta
  
    card.appendChild(imageElement);
    card.appendChild(nameElement);
    // Agregamos la tarjeta del personaje al contenedor
    charactersContainer.appendChild(card);
  });
}

// Evento al hacer clic en el botón para obtener los personajes del API
document.querySelector("button").addEventListener("click", getFilesFromApi);

