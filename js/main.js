function saludar(nombre, apellido) {
   console.log("Hola, " + nombre + " " + apellido);
   alert("Hola, " + nombre + " " + apellido);
}

let nombreIngresado;
let apellidoIngresado;

do {
    nombreIngresado = prompt ("Ingresa tu nombre");
    apellidoIngresado = prompt("Ingresa tu apellido");
} while (nombreIngresado === "" || apellidoIngresado === "")
saludar(nombreIngresado, apellidoIngresado);


// Variables con precios para cada modelo
let precioModelo1 = 100;
let precioModelo2 = 200;
let precioModelo3 = 300;

let precioTotal = 0;

// Función para mostrar las opciones al usuario
function mostrarOpciones() {
  alert("Selecciona un modelo:\n" +
        "1. Modelo1 - $" + precioModelo1 + "\n" +
        "2. Modelo2 - $" + precioModelo2 + "\n" +
        "3. Modelo3 - $" + precioModelo3);
}

function calcularTotal(opcionElegida) {
  switch (opcionElegida) {
    case "1":
      return precioModelo1;
    case "2":
      return precioModelo2;
    case "3":
      return precioModelo3;
    default:
      return 0;
  }
}

do {
  if (precioTotal === 0) {
    mostrarOpciones();
  } else {
    alert("Precio total hasta el momento: $" + precioTotal);
  }
  
  let opcionElegida = prompt("Ingresa el número correspondiente al modelo que deseas comprar:");
  precioTotal += calcularTotal(opcionElegida);
} while (confirm("¿Deseas elegir otro modelo?"));

alert("El precio total es: $" + precioTotal);
console.log("El precio total es: $" + precioTotal);
