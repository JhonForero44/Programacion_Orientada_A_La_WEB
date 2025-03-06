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

        })
        .catch((error) => {
            console.error("Hubo un problema con la operación fetch:", error);
        });
}

getFilesFromApi()