// Función para agregar un nuevo elemento div cuando el mouse se encuentra sobre el div "title"
document.getElementById('title').addEventListener('mouseover', function() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Este es un nuevo div agregado dinámicamente';
    document.body.appendChild(newDiv);
});

// Función para mover el div de descripción antes del div "other" cuando el mouse se encuentra sobre el div "descripcion"
document.getElementById('descripcion').addEventListener('mouseover', function() {
    const descripcionDiv = document.getElementById('descripcion');
    const otherDiv = document.getElementById('other');
    document.body.insertBefore(descripcionDiv, otherDiv);
});

// Función para agregar un nuevo elemento al final del div "centro" cuando el mouse se encuentra sobre el div "box"
document.getElementById('box').addEventListener('mouseover', function() {
    const centroDiv = document.getElementById('centro');
    const newElement = document.createElement('p');
    newElement.textContent = 'Contenido agregado dinámicamente al div "centro"';
    centroDiv.append(newElement);
});