/*

Ideen:
 * EventOn Funktion bei Control fitbound auf Overlay legen ?
 * Auswahlliste mit den jeweiligen Bars, Shops und Breakfasts?
 * Suchen Plugin als 3. Plugin einbinden?

 */

//Karte einbinden
let myMap = L.map("map");

// für MapControl und fitBounds
const preshopsMarker = L.featureGroup().addTo(myMap);
const barMarker = L.featureGroup().addTo(myMap);
const breakfastMarker = L.featureGroup().addTo(myMap);

//für Plugin MarkerCluster
const preshopsclmarkers = L.markerClusterGroup().addTo(myMap);
const barclmarkers = L.markerClusterGroup().addTo(myMap);
const breakfastclmarkers = L.markerClusterGroup().addTo(myMap);

//Hintergrundkarten
let myLayers = {
    osmlayer: L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            subdomains: ["a", "b", "c"],
            attribution: "Datenquelle: <a href = 'https://www.openstreetmap.org'>openstreetmap.org</a>"
        }),
    geolandbasemap: L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: "Datenquelle: <a href = 'https://www.basemap.at'>basemap.at</a>"
    }
    ),
    bmapoverlay: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png",{
        subdomains : ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href = 'https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmaporthofoto30cm: L.tileLayer("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg",{
        subdomains : ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href = 'https://www.basemap.at'>basemap.at</a>"
        }
    ),
};

//Default Hintergrundkarte
myMap.addLayer(myLayers.bmaporthofoto30cm);
//Default Overlaykarte
myMap.addLayer(myLayers.bmapoverlay);

//Kartenansichten schalten und zu Karte hinzufügen(aktivieren)
let myMapControl = L.control.layers({
    "OSM BaseMap": myLayers.osmlayer,
    "BaseMap.at": myLayers.geolandbasemap,
    "Orthofoto": myLayers.bmaporthofoto30cm,
}, {
    "Overlay Beschriftung": myLayers.bmapoverlay,
    //"Shops": preshopsMarker,
    //"Bars und Clubs": barMarker,
    "Frühstücken":breakfastMarker,
    }, {
        collapsed: true
    }).addTo(myMap);


//Maßstaß erstellen und hinzufügen
let myMapScale = L.control.scale(
    {
        position: "bottomleft",
        metric: true,
        imperial: false,
        maxWidth: 200
    }
).addTo(myMap);

//Plugin Fullscreen
myMap.addControl(new L.Control.Fullscreen());

//myMap.setView([47.2638846,11.3941364],15);

//Marker definieren, erstellen, Gruppieren und Einbinden
const markerOptions = {
    title: "Frühstücken",
    //draggable: true,
    opacity: 0.95
}

//Kurze Version mit for Schleife
for (i = 0; i < nightlife_bf_ibkDaten.length; i++){
const bf = nightlife_bf_ibkDaten[i];

L.marker([bf.lat,bf.lng], markerOptions).addTo(breakfastMarker).bindPopup(`<p>Lokal: ${bf.titel} </br> Adresse: ${bf.info} </br> Reservierung: ${bf.attribute1} </br> </p>`);

}

//Marker Gruppe zur Karte hinzu 
//Start Ansicht - Zoom
myMap.fitBounds(breakfastMarker.getBounds()); 





/*
const SZ_Koordinaten = {
    start : [47.431846, 12.214388],
    ziel : [47.39918, 11.943173],
};*/

/* Icons erstellen, wenn nötig
const myIconStart = L.icon({
    iconUrl: 'images/cycling.png',
    iconAnchor: [16, 37]
});

const myIconZiel = L.icon({
    iconUrl: 'images/finish2.png',
    iconAnchor: [16, 37]
});

const markerOptionStart = {
    title: "Westendorf",
    draggable: false,
    opacity: 0.90,
    icon: myIconStart
};

const markerOptionZiel = {
    title: "Innsbrucker Umland",
    draggable: false,
    opacity: 0.90,
    icon: myIconZiel
}; */




// Daten über lokales geojson wird eingebunden 
/*
const shopgeojson = L.geoJSON(nightlife_shops_ibkDaten).addTo(preshopsMarker);
const bargeojson = L.geoJSON(nightlife_bars_ibkDaten).addTo(barMarker);
const breakfastgeojson = L.geoJSON(nightlife_bf_ibkDaten).addTo(breakfastMarker);

geojson.bindPopup(function(layer){
    const props = layer.feature.properties;
    const popupText = `<h2>${props.name}</h2>
    <p>Westendorf - Alpbach</p>`;
    return popupText;
});*/

//myMap.fitBounds(beakfastMarker.getBounds()); 