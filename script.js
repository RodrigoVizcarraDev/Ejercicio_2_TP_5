const taxonomiaGeneraciones = [
    {
        nombreGeneracion: "GeneracionZ",
        marcoTemporal: [1994, 2010],
        poblacionDeLaGeneracion: 7800000,
        circunstanciaHistorica: "Expansion masiva de internet",
        rasgoCaracteristico: "Irreverencia"
    },
    {
        nombreGeneracion: "GeneracionY_milennials",
        marcoTemporal: [1981, 1993],
        poblacionDeLaGeneracion: 7200000,
        circunstanciaHistorica: "Inicio de la digitalizacion",
        rasgoCaracteristico: "Frustracion",
    },
    {
        nombreGeneracion: "GeneracionX",
        marcoTemporal: [1969, 1980],
        poblacionDeLaGeneracion: 9300000,
        circunstanciaHistorica: "Crisis del 73 y transicion española",
        rasgoCaracteristico: "Obsesion por el exito"
    },
    {
        nombreGeneracion: "Baby Boom",
        marcoTemporal: [1949, 1968],
        poblacionDeLaGeneracion: 12200000,
        circunstanciaHistorica: "Paz y explosion demografica",
        rasgoCaracteristico: "Ambicion"
    },
    {
        nombreGeneracion: "Silent Generation",
        marcoTemporal: [1930, 1948],
        poblacionDeLaGeneracion: 6300000,
        circunstanciaHistorica: "Confictor belicos",
        rasgoCaracteristico: "Austeridad"
    }
];
class Persona {
    //Propiedades privadas
    #nombre = "userName";
    #edad = 0;
    #dni = 0;
    #sexo = undefined;
    #peso = 0;
    #altura = 0;
    #anioNacimiento = 0;

    //Metodo constructor
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;
    }

    //Metodos get y set
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(edad) {
        this.#edad = edad;
    }

    get dni() {
        return this.#dni;
    }

    set dni(dni) {
        this.#dni = dni;
    }

    get sexo() {
        return this.#sexo;
    }

    set sexo(sexo) {
        this.#sexo = sexo;
    }

    get peso() {
        return this.#peso;
    }

    set peso(peso) {
        this.#peso = peso;
    }

    get altura() {
        return this.#altura;
    }

    set altura(altura) {
        this.#altura = altura;
    }

    get anioNacimiento() {
        return this.#anioNacimiento;
    }

    set anioNacimiento(anioNacimiento) {
        this.#anioNacimiento = anioNacimiento;
    }

    mostrarInformacionPersona() {
        document.write(
            `<p>Nombre: ${this.#nombre}</p>
             <p>Edad: ${this.#edad}</p>
             <p>DNI: ${this.#dni}</p>
             <p>Sexo: ${this.#sexo}</p>
             <p>Peso: ${this.#peso}</p>
             <p>Altura: ${this.#altura}</p>
             <p>Año: ${this.#anioNacimiento}</p>`);
    }

    mostrarGeneracion() {
        let tabla = `<table>`;

        tabla += `<tr>`;

        tabla += `<th>`;
        tabla += `Nombre de la Generacion`;
        tabla += `</th>`;

        tabla += `<th>`;
        tabla += `Marco temporal`;
        tabla += `</th>`;

        tabla += `<th>`;
        tabla += `Poblacion de las generaciones`;
        tabla += `</th>`;

        tabla += `<th>`;
        tabla += `Circunstancia historica`;
        tabla += `</th>`;

        tabla += `<th>`;
        tabla += `Rasgo caracteristico`;
        tabla += `</th>`;

        tabla += `</tr>`;
        taxonomiaGeneraciones.forEach((elemento) => {
            // Generacion 
            if (this.#anioNacimiento >= elemento.marcoTemporal[0] && this.#anioNacimiento <= elemento.marcoTemporal[1]) {
                document.write(`<h1>Pertenece a la siguiente generacion</h1>`);
                tabla += `<tr>`;

                tabla += `<td>`;
                tabla += `${elemento.nombreGeneracion}`;
                tabla += `</td>`;

                tabla += `<td>`;
                tabla += `${elemento.marcoTemporal}`;
                tabla += `</td>`;

                tabla += `<td>`;
                tabla += `${elemento.poblacionDeLaGeneracion}`;
                tabla += `</td>`;

                tabla += `<td>`;
                tabla += `${elemento.circunstanciaHistorica}`;
                tabla += `</td>`;

                tabla += `<td>`;
                tabla += `${elemento.rasgoCaracteristico}`;
                tabla += `</td>`;
            }
        })
        document.write(tabla);
    }

    mostrarSiEsMayorDeEdad() {
        this.#edad >= 18 ? alert(`Usted es mayor de edad, tiene ${this.#edad} años`) : alert(`Usted es menor de edad, tiene ${this.#edad} años`);
    }

    mostrarDatos() {
        alert(`<h2>Sus datos son</h2>
               <ul>
                  <li>${this.#nombre}</li>
                  <li>${this.#edad}</li>
                  <li>${this.#dni}</li>
                  <li>${this.#altura}</li>
                  <li>${this.#peso}</li>
                  <li>${this.#sexo}</li>
               </ul>`)
    }
}



//Obteniendo el formulario
const formulario = document.querySelector("#formulario");

//Creando objeto personaUsuario
let objetoPersonaUsuario;
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const seccionPrincipal = document.querySelector("#seccionPrincipal");

    //--------------------------------------------------------------------

    //Obteniendo datos del usuario de sus respectivos input

    //nombre
    const nombreUsuario = document.querySelector("#nombre").value;
    //edad
    const edadUsuario = document.querySelector("#edad").value;
    //DNI
    const dniUsuario = document.querySelector("#dni").value;
    //sexo
    const sexoUsuario = document.querySelector("input[type='radio'][name='sexo']:checked");
    const valorSexoUsuario = sexoUsuario ? sexoUsuario.value : "nulo panita";

    //peso
    const pesoUsuario = document.querySelector("#peso").value;
    //altura
    const alturaUsuario = document.querySelector("#altura").value;
    //año de nacimiento
    const anioNacimientoUsuario = document.querySelector("#anioNacimiento").value;

    //Creando objeto de tipo persona con los valores que introdujo el usuario
    objetoPersonaUsuario = new Persona(nombreUsuario, edadUsuario, dniUsuario, sexoUsuario, pesoUsuario, alturaUsuario, anioNacimientoUsuario);

    //--------------------------------------------------------------------

    
    // //Creamos boton mostrar generacion 
    // const botonMostrarGeneracion = document.createElement("button");
    // botonMostrarGeneracion.innerHTML = "Mostrar generacion";
    // botonMostrarGeneracion.classList.add("btn", "btn-primary", "p-4");
    // botonMostrarGeneracion.id = "btnMostrarGeneracion"

    // //Creamos boton es mayor de edad
    // const botonEsMayorDeEdad = document.createElement("button");
    // botonEsMayorDeEdad.innerHTML = "Es mayor de edad";
    // botonEsMayorDeEdad.classList.add("btn", "btn-primary", "p-4");
    // botonEsMayorDeEdad.id = "btnEsMayorDeEdad";

    // //Añadimos el boton mostrar generacion en la seccion principal
    // if(!document.getElementById("btnMostrarGeneracion")){
    //     seccionPrincipal.appendChild(botonMostrarGeneracion);
    // }

    // //Añadimos boton mostrar es mayor de edad en la seccion principal
    // if(!document.getElementById("btnEsMayorDeEdad")){
    //     seccionPrincipal.appendChild(botonEsMayorDeEdad);
    // }

    

    console.log(nombreUsuario + " " + (typeof nombreUsuario));
    console.log(edadUsuario + " " + (typeof edadUsuario));
    console.log(valorSexoUsuario);

    
});


// Obteniendo boton mostrarGeneracion
const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");

// Obteniendo boton esMayorDeEdad
const btnEsMayorDeEdad = document.getElementById("btnEsMayorDeEdad");

// Evento mostrarGeneracion
btnMostrarGeneracion.addEventListener("click", () =>{
    
    taxonomiaGeneraciones.forEach((elemento) => {
        if(objetoPersonaUsuario.anioNacimiento >= elemento.marcoTemporal[0] &&
           objetoPersonaUsuario.anioNacimiento <= elemento.marcoTemporal[1]){
            alert(`La generacion de usted es "${elemento.nombreGeneracion}"`);
           }
    })
});

btnEsMayorDeEdad.addEventListener("click", () =>{
    objetoPersonaUsuario.edad >= 18 ? alert("Usted es mayor de edad") : alert("Usted es menor de edad");
});