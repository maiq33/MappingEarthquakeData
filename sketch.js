let leafletMap;

function setup(){
    noCanvas(); // Como no vamos a dibujar con p5.js en este caso
    initMap();  // Inicializar el mapa
}

function draw(){
    // Si tienes código relacionado con p5.js, lo pones aquí.
}

function initMap() {
    // Crear el mapa y desactivar interactividad
    leafletMap = L.map('leafletMapDiv', {
        center: [0, 0],
        zoom: 2,
        draggable: false,   // Desactivar movimiento con drag
        zoomControl: false, // Desactivar controles de zoom
        scrollWheelZoom: false, // Desactivar zoom con rueda del mouse
        touchZoom: false,   // Desactivar zoom con gestos táctiles
        doubleClickZoom: false // Desactivar zoom con doble clic
    });

    // Agregar un "tileset" con diseño oscuro (en este caso, uno de CartoDB)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(leafletMap);
}


