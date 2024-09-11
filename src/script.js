// Función para añadir productos al carrito
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtener el carrito del localStorage o inicializarlo
    cart.push(productId); // Añadir el producto al carrito
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el carrito actualizado en localStorage
    console.log('Producto ' + productId + ' añadido al carrito');
    alert('Producto añadido al carrito con éxito'); // Avisar al usuario
}

// Validación y envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el email

    if (name && email && message) {
        if (!emailRegex.test(email)) {
            alert('Por favor, introduzca un correo electrónico válido');
            return;
        }
        // Aquí iría el código para enviar el formulario al servidor (AJAX, fetch, etc.)
        alert('Formulario enviado con éxito');
        // Resetear el formulario
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, rellene todos los campos correctamente');
    }
});

// Función para establecer una cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Establece la fecha de expiración
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Crea la cookie
}

// Función para obtener una cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArr = decodedCookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.indexOf(cname) === 0) {
            return cookie.substring(cname.length, cookie.length);
        }
    }
    return "";
}

// Mostrar el mensaje de cookies si no ha sido aceptado
window.onload = function() {
    if (getCookie("cookiesAccepted") !== "true") {
        document.getElementById('cookieConsent').style.display = 'block';
    }
}

// Evento para el botón de aceptar cookies
document.getElementById('acceptCookies').addEventListener('click', function() {
    setCookie("cookiesAccepted", "true", 365); // La cookie durará 1 año
    document.getElementById('cookieConsent').style.display = 'none'; // Oculta el mensaje de cookies
});
