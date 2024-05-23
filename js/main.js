function saludar(nombre, apellido) {
  console.log("Hola, " + nombre + " " + apellido);
  alert("Hola, " + nombre + " " + apellido);
}

let nombreIngresado;
let apellidoIngresado;

do {
  nombreIngresado = prompt("Ingresa tu nombre");
  apellidoIngresado = prompt("Ingresa tu apellido");
} while (nombreIngresado === "" || apellidoIngresado === "");

saludar(nombreIngresado, apellidoIngresado);

// Objetos con precios para cada modelo
let modelos = [
  { id: 1, nombre: 'Modelo1', precio: 100 },
  { id: 2, nombre: 'Modelo2', precio: 200 },
  { id: 3, nombre: 'Modelo3', precio: 300 }
];

let carrito = [];

// Función para mostrar las opciones al usuario
function mostrarOpciones() {
  let mensaje = "Selecciona un modelo:\n";
  modelos.forEach(modelo => {
      mensaje += modelo.id + ". " + modelo.nombre + " - $" + modelo.precio + "\n";
  });
  alert(mensaje);
}

function calcularTotal() {
  let total = 0;
  carrito.forEach(modelo => {
      total += modelo.precio;
  });
  return total;
}

do {
  if (carrito.length === 0) {
      mostrarOpciones();
  } else {
      alert("Precio total hasta el momento: $" + calcularTotal());
  }

  let opcionElegida = prompt("Ingresa el número correspondiente al modelo que deseas comprar:");
  let modeloSeleccionado = modelos.find(modelo => modelo.id == opcionElegida);
  
  if (modeloSeleccionado) {
      carrito.push(modeloSeleccionado);
  } else {
      alert("Opción no válida. Por favor, selecciona un modelo de la lista.");
  }
} while (confirm("¿Deseas elegir otro modelo?"));

let precioTotal = calcularTotal();

alert("El precio total es: $" + precioTotal);
console.log("El precio total es: $" + precioTotal);

