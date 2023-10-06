// Obtén referencias a los elementos del DOM
const fileInput = document.getElementById('fileInput');
const coronaElement = document.getElementById('coronaElement');

// Escucha el evento 'change' del input de tipo archivo
fileInput.addEventListener('change', function () {
    const file = fileInput.files[0]; // Obtiene el archivo seleccionado

    if (file) {
        const imageUrl = URL.createObjectURL(file); // Crea una URL para el archivo seleccionado
        coronaElement.style.backgroundImage = `url(${imageUrl})`; // Establece la imagen de fondo

        // Elimina la imagen de fondo por defecto
        coronaElement.style.backgroundImage = 'none';
    }

    window.location.href = '../index.html'; // Cambia 'index.html' por la URL de tu página de inicio

});
