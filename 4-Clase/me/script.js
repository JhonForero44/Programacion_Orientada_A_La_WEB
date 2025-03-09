const JsonLocal = '../json/informacion.json';  // Asegúrate de que el archivo JSON esté en el mismo directorio

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
function createCharacterCards(estudiantes) {
    // Obtenemos el contenedor de los personajes en el HTML
    const charactersContainer = document.getElementById("charactersContainer");

    // Verificamos si equipos es un array válido
    if (Array.isArray(estudiantes)) {
        // Recorremos cada equipo y creamos su tarjeta
        estudiantes.forEach((estudiante) => {
            // Creamos un elemento div para la tarjeta del equipo  
            const card = document.createElement("div");
            card.classList.add("character-card");

            // Creamos un elemento H3 para mostrar el nombre del equipo
            const nameStudent = document.createElement("p");
            nameStudent.innerHTML = `<strong>Nombre:</strong> ${estudiante.nombre}`;

            // Creamos un elemento H3 para mostrar el país del equipo
            const namePais = document.createElement("p");
            namePais.innerHTML = `<strong>Pais:</strong> ${estudiante.pais}`;

            // Creamos un elemento H3 para mostrar los títulos ganados
            const numTelefono = document.createElement("p");
            numTelefono.innerHTML = `<strong>Telefono:</strong> ${estudiante.telefono}`;

            // Creamos un elemento H3 para mostrar el estadio del equipo
            const yearStudent = document.createElement("p");
            yearStudent.innerHTML = `<strong>Edad:</strong> ${estudiante.edad}`;

            // Creamos un elemento img para el escudo del equipo (suponiendo que cada equipo tiene una imagen)
            const actuEstud = document.createElement("p");;
            actuEstud.innerHTML = `<strong>Estudio Actual:</strong> ${estudiante.estudiosActual}`;

            // Creamos un elemento H3 para mostrar el estadio del equipo
            const eduStudent = document.createElement("p");
            eduStudent.innerHTML = `<strong>Educacion Realizada:</strong> ${estudiante.educacion}`;

            // Creamos un elemento H3 para mostrar el estadio del equipo
            const srcFotoUni = document.createElement("img");
            srcFotoUni.src = estudiante.imagesUniversidad || '';

            // Creamos un elemento H3 para mostrar el estadio del equipo
            const srcFotoSena = document.createElement("img");
            srcFotoSena.src = estudiante.imagesSena || '';

            // Creamos un elemento H3 para mostrar el estadio del equipo
            const srcFoto = document.createElement("img");
            srcFoto.src = estudiante.foto || '';

            const interesPersonales = document.createElement("p");
            interesPersonales.innerHTML = `<strong>Intereses TI:</strong> ${estudiante.interesTecnologicos}`;


            // Agregamos los elementos a la tarjeta
            card.appendChild(nameStudent);
            card.appendChild(srcFoto);
            card.appendChild(namePais);
            card.appendChild(numTelefono);
            card.appendChild(yearStudent);
            card.appendChild(interesPersonales);
            card.appendChild(eduStudent);
            card.appendChild(srcFotoSena);
            card.appendChild(actuEstud);
            card.appendChild(srcFotoUni);

            // Agregamos la tarjeta al contenedor
            charactersContainer.appendChild(card);
        });
    } else {
        console.error('La propiedad "equipos" no es un array');
    }
}

// Llamamos a la función para obtener los equipos del archivo JSON
getFilesFromApi();
