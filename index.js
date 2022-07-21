console.log("Hola")

// DOM DOCUMENT OBJECT MODEL

// estructura de objetos generada por el navegador

// arbol dom

console.log(document)

// guarda elementos a través de su id
const container = document.getElementById("container")


// guardar elementos a través de su nombre de etiqueta
const div = document.getElementsByTagName("div")

console.log(div)

// guardar por el nombre de clase

const divClase = document.getElementsByClassName("tarjeta")
console.log(divClase)

// querySelector

//caso id

const contenedorDivID = document.querySelector("#container")

//caso class
const contenedorDivClass = document.querySelector(".tarjeta")

//caso etiqueta
const contenedorDivEtiqueta = document.querySelector("div")

console.log(contenedorDivClass, contenedorDivEtiqueta, contenedorDivID)

// querySelectorAll

const todosLoscontenedoresDiv = document.querySelectorAll("div")

console.log(todosLoscontenedoresDiv)


for(let i = 0; i < todosLoscontenedoresDiv.length; i++){
    console.log(todosLoscontenedoresDiv[i])
}

// NO SE PUEDE ITERAR SOBRE NODELIST CON MÉTODOS DE ARRAYS --- EJ

// todosLoscontenedoresDiv.map(curr => console.log(curr))

const parrafoSaludo = document.querySelector("#saludo")
console.log(parrafoSaludo)

// innerText (modifica el texto que se encuentra dentro de un elemento html)

parrafoSaludo.innerText = "le cambio el texto xd"

// innerHTML (define código html desde js que el navegador interpreta como código html)

container.innerHTML = `<p>Hola soy el p de innerhtml</p>`

// reduce(metodo de arrays) + innerhtml = tarjetas desde js

console.log(POKEMON)
console.log(POKEMON.pokemon)

const debilidadesPokemon = (array, i) => {    

    const debilidadesArray = array[i].weaknesses.reduce((acc, curr) => {
        return acc + `
            <p>${curr}</p>
        `      
    },"")

    return debilidadesArray
}


const tarjetasHtml = POKEMON.pokemon.reduce((acc, elemento, i) => {   

        return acc = acc + `    
            <div class="tarjeta">
                <div class="img-container">
                    <img src=${elemento.img} alt=${elemento.name}>
                </div>   
                <p>
                    ${elemento.name}
                </p> 
                <div>
                    <p>
                        Debilidades:
                    </p>
                    ${debilidadesPokemon(POKEMON.pokemon, i)}     
                </div>   
            </div>
        `       
},"")

console.log(tarjetasHtml)

const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")

console.log(contenedorTarjetas)

contenedorTarjetas.innerHTML = tarjetasHtml

