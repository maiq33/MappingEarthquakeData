let leafletMap;

function setup(){
    noCanvas(); // Como no vamos a dibujar con p5.js en este caso
    initMap();  // Inicializar el mapa
}

function draw(){
    // Si tienes código relacionado con p5.js, lo pones aquí.
}

function initMap() {
    leafletMap = L.map('leafletMapDiv').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap); 
}

