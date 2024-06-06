document.addEventListener("DOMContentLoaded", function() {
  // Objetos con precios para cada modelo
  const modelos = [
      { id: 1, nombre: 'Modelo1', precio: 100 },
      { id: 2, nombre: 'Modelo2', precio: 200 },
      { id: 3, nombre: 'Modelo3', precio: 300 }
  ];

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Función para actualizar el carrito en el DOM y el localStorage
  function actualizarCarrito() {
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
  }

  // Función para calcular el total del carrito
  function calcularTotal() {
      return carrito.reduce((total, modelo) => total + modelo.precio, 0);
  }

  // Función para mostrar el carrito en el DOM
  function mostrarCarrito() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      carrito.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.nombre} - $${item.precio}`;
          cartItems.appendChild(li);
      });

      const cartTotal = document.getElementById('cart-total');
      cartTotal.textContent = `Total: $${calcularTotal()}`;
  }

  // Añadir event listeners a los botones "Add to Cart"
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
          const id = parseInt(this.getAttribute('data-id'));
          const modeloSeleccionado = modelos.find(modelo => modelo.id === id);

          if (modeloSeleccionado) {
              carrito.push(modeloSeleccionado);
              actualizarCarrito();
          }
      });
  });

  // Mostrar el total del carrito al hacer clic en el botón del carrito
  document.getElementById('carritoButton').addEventListener('click', function() {
      alert(`El precio total es: $${calcularTotal()}`);
  });

  // Mostrar el carrito al cargar la página
  mostrarCarrito();
});

