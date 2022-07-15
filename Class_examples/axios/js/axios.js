axios
  .get("https://www.breakingbadapi.com/api/characters")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => { // si da un error, este devuelve la descripcion del mismo
    console.log("Tu error: ", error);
  })
  .finally(() => {
    console.log(123);
  });

async function obtenerFrases() {

    // similar a .catch, devuelve el error y la descripcion del mismo
  try {
    let frases = await axios.get("https://www.breakingbadapi.com/api/quotes");
    return frases.data;
  } catch (error) {
    console.log("Tu error: ", error);
  }
}

let axiosFrases = obtenerFrases().then((response) => {
  console.log("Respuesta de axios");
  console.log(response);
});

// si tenemos una URL base o una key para acceder a los servicios de la API y se repite en la URL,
// Se puede crear una variable para guardar la info y con ${} mandar a llamarlas

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f734f08e52d5990dc608ad31b28536d6";
axios.get(
    // mandar a llamar la URL y la key guardadas en las variables
    
  `${BASE_URL}/movie/550?api_key=${API_KEY}`
).then((response) => {
    console.log('Peliculas')
    console.log(response)
}).catch((error) => {
    console.log(error)
});

async function getCharacter(characterID) {
    let personaje = await axios.get(

        // mandar a llamar la URL y la key guardadas en las variables

      `${BASE_URL}/person/${characterID}?api_key=${API_KEY}`
    );
    return personaje.data
}

async function awaitResponse() {
    let response = await getCharacter(45);
    console.log('Tu respuesta hola: ', response)
}

awaitResponse();