let leafletMap;

let clat = 0;
let clon = 0;

// 31.2303904, 121.4737021 - Shanghai 
let lat = 31.2303904;
let lon = 121.4737021;

let mapZoom = 2;

let earthquakes;

function preload(){
    earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv")
}

function setup(){
    noCanvas(); // Como no vamos a dibujar con p5.js en este caso
    initMap();  // Inicializar el mapa



    for (let i = 1; i < earthquakes.length; i++) {
        let data = earthquakes[i].split(/,/);
        print(data);

        let lat = parseFloat(data[1]);
        let lon = parseFloat(data[2]);
        let mag = parseFloat(data[4]);

        mag = pow(mag, 10);
        mag = sqrt(mag);

        if (isNaN(lat) || isNaN(lon)) {
            continue;  // Si las coordenadas no son válidas, salta al siguiente ciclo del bucle
        }

    // Agregar un círculo a las coordenadas
    L.circle([lat, lon], {
        color: 'magenta',
        fillColor: 'magenta',
        fillOpacity: 0.5,
        radius: mag * 10  // radio en metros, puedes ajustar según necesites
    }).addTo(leafletMap);
       
    }


}

function mercX(lon){
    lon = radians(lon);
    let a = (256 / PI) * pow(2,mapZoom);
    let b = a + PI;
    return a * b;
}

function mercY(lat){
    lat = radians(lat);
    let a = (256 / PI) * pow(2,mapZoom);
    let b = tan((PI / 4) + (lat / 2));
    let c = PI - log(b)
    return a * c;
}

function initMap() {
    // Crear el mapa y desactivar interactividad
    leafletMap = L.map('leafletMapDiv', {
        center: [0, 0],
        zoom: mapZoom,
        //draggable: false,   // Desactivar movimiento con drag
        //zoomControl: false, // Desactivar controles de zoom
        //scrollWheelZoom: false, // Desactivar zoom con rueda del mouse
        //touchZoom: false,   // Desactivar zoom con gestos táctiles
        //doubleClickZoom: false // Desactivar zoom con doble clic
    });

    // Agregar un "tileset" con diseño oscuro (en este caso, uno de CartoDB)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(leafletMap);
}


