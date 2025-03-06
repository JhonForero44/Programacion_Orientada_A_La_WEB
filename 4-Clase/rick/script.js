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
      console.log('valores de rick', data);
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

    // Creamos un elemento H3 para mostrar el nombre del personaje
    const nameElement = document.createElement("H3");
    nameElement.textContent = `Nombre: ${character.name}`;
    
    // Creamos un elemento H3 para mostrar el tipo de especie del personaje
    const nameSpecie = document.createElement("H3");
    nameSpecie.textContent = `Especie: ${character.species}`;
    
    // Creamos un elemento H3 para mostrar el genero del personaje
    const nameGender = document.createElement("H3");
    nameGender.textContent = `Genero: ${character.gender}`;

    // Creamos un elemento H3 para mostrar el tipo del personaje
    const nameId = document.createElement("H3");
    nameId.textContent = `Id: ${character.id}`;

    // Creamos un elemento img para la imagen del personaje
    console.log(character)
    const imageElement = document.createElement("img");
    imageElement.src = character.image;
    console.log(character.image);

    // Hacer clic en la tarjeta redirige a character.html con el ID del personaje
    card.addEventListener("click", () => {
      window.location.href = `capitulo.html?id=${character.id}`;
    });

    // Agregamos el nombre del personaje al div de la tarjeta
    card.appendChild(nameId);
    card.appendChild(nameElement);
    card.appendChild(nameSpecie);
    card.appendChild(nameGender);
    card.appendChild(imageElement);

    // Agregamos la tarjeta del personaje al contenedor
    charactersContainer.appendChild(card);
  });
}

// Evento al hacer clic en el botón para obtener los personajes del API
getFilesFromApi();
