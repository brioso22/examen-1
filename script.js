document.getElementById('other').addEventListener('click', function() {
    const descripcionDiv = document.getElementById('descipcion'); // Corregido a 'descipcion'
    descripcionDiv.style.width = '150px';
    descripcionDiv.style.height = '300px';

    // Crear un nuevo div
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Nuevo contenido agregado dinámicamente al div "other"';

    // Agregar el nuevo div al final del div "other"
    document.getElementById('other').appendChild(newDiv);

    // Mueve el div de descripción antes del div "other"
    const otherDiv = document.getElementById('other');
    otherDiv.parentNode.insertBefore(descripcionDiv, otherDiv);
});
