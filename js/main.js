document.addEventListener("DOMContentLoaded", function() {
  const modelos = [
      { id: 1, nombre: 'Modelo1', precio: 100 },
      { id: 2, nombre: 'Modelo2', precio: 200 },
      { id: 3, nombre: 'Modelo3', precio: 300 }
  ];

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function actualizarCarrito() {
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
  }

  function calcularTotal() {
      return carrito.reduce((total, modelo) => total + modelo.precio, 0);
  }

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

  const carritoButton = document.getElementById('carritoButton');
  const cartModal = document.getElementById('cartModal');
  const closeModal = document.getElementsByClassName('close')[0];
  const purchaseButton = document.getElementById('purchaseButton');
  const purchaseForm = document.getElementById('purchaseForm');
  const submitPurchase = document.getElementById('submitPurchase');

  carritoButton.addEventListener('click', function() {
      cartModal.style.display = 'block';
      mostrarCarrito();
  });

  closeModal.addEventListener('click', function() {
      cartModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === cartModal) {
          cartModal.style.display = 'none';
      }
  });

  purchaseButton.addEventListener('click', function() {
      purchaseForm.classList.toggle('hidden');
  });

  submitPurchase.addEventListener('click', function() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      if (name && email) {
          localStorage.setItem('purchaseDetails', JSON.stringify({ name, email }));
          alert('Compra realizada con éxito');
          cartModal.style.display = 'none';
          carrito = [];
          actualizarCarrito();
          purchaseForm.classList.add('hidden');
      } else {
          alert('Por favor, complete todos los campos');
      }
  });
});
