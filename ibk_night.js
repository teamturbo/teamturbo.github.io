/*

Ideen:
 * EventOn Funktion bei Control fitbound auf Overlay legen ?
 * Auswahlliste mit den jeweiligen Bars, Shops und Breakfasts?
 * Suchen Plugin als 4. Plugin einbinden?

 */

//Karte einbinden
let myMap = L.map("map");

// für MapControl und fitBounds
const preshopsMarker = L.featureGroup().addTo(myMap);
const barMarker = L.featureGroup().addTo(myMap);
const breakfastMarker = L.featureGroup();//.addTo(myMap);
const latesnacksMarker = L.featureGroup().addTo(myMap);
const clustergrp = L.featureGroup().addTo(myMap);

//für Plugin MarkerCluster (1)
//const preshopsclmarkers = L.markerClusterGroup().addTo(myMap);
//const barclmarkers = L.markerClusterGroup().addTo(myMap);
const breakfastclmarkers = L.markerClusterGroup().addTo(clustergrp);
const latesnacksclmarker = L.featureGroup().addTo(myMap);

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
    "Shops": preshopsMarker,
    "Bars und Clubs": barMarker,
    "LateNight Snacks": latesnacksMarker,
    "Frühstücken": breakfastMarker,
    "Alle Marker": clustergrp,
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

//Plugin Fullscreen (2)
myMap.addControl(new L.Control.Fullscreen());

//icons
const myIconbf = L.icon({
    iconUrl: 'images/restaurant_breakfast(2).png',
    iconAnchor: [16, 37]
});

//Einstellungen für die Darstellung der Marker inkl. Icon
const bfmarkerOptions = {
    title: "Frühstücken",
    //draggable: true,
    opacity: 0.95,
    icon: myIconbf,
}
const shopsmarkerOptions = {
    title: "PreShops",
    //draggable: true,
    opacity: 0.95
}
const lsmarkerOptions = {
    title: "Latenight Snacks",
    //draggable: true,
    opacity: 0.95
}
const barsmarkerOptions = {
    title: "Bars und Clubs",
    //draggable: true,
    opacity: 0.95
}

//Einzelne Marker erstellen und MarkerGruppe zuordnen inkl. Popup
for (i = 0; i < nightlife_bf_ibkDaten.length; i++){
    const bf = nightlife_bf_ibkDaten[i];
    L.marker([bf.lat,bf.lng], bfmarkerOptions).addTo(breakfastMarker).bindPopup(`<p><img src=${bf.image} style="width: 75px; height: 75px;"></img> </br> Lokal: ${bf.titel} </br> Adresse: ${bf.adresse} </br> Telefon: ${bf.telnr} </br> Online: <a href='${bf.link}'>${bf.link}</a>  </br> EMail:<a href="${bf.email}">${bf.email}</a> </br> Öffnungszeiten:</br> ${bf.opens} </br></p>`);
    L.marker([bf.lat,bf.lng], bfmarkerOptions).addTo(breakfastclmarkers).bindPopup(`<p><img src=${bf.image} style="width: 75px; height: 75px;"></img> </br> Lokal: ${bf.titel} </br> Adresse: ${bf.adresse} </br> Telefon: ${bf.telnr} </br> Online: <a href='${bf.link}'>${bf.link}</a>  </br> EMail:<a href="${bf.email}">${bf.email}</a> </br> Öffnungszeiten:</br> ${bf.opens} </br></p>`);
}

//Funktioniert noch nicht, keine ahnung warum??!!
for (i = 0; i < nightlife_shops_ibkDaten.length; i++){
    const shops = nightlife_shops_ibkDaten[i];
    
    //L.marker([shops.lat,shops.lng], shopsmarkerOptions).addTo(preshopsMarker).bindPopup(`<p><img src=${shops.image}></img> </br> Lokal: ${shops.titel} </br> Adresse: ${shops.adresse} </br> Reservierung: ${shops.telnr} </br> online: <a href='${shops.link}'>${shops.link}</a>  </br> EMail:<a href="${shops.email}">${shops.email}</a> </br> Öffnungszeiten:</br> ${shops.opens} </br></p>`);
    L.marker([shops.lat,shops.lng], shopsmarkerOptions).addTo(preshopsMarker).bindPopup(`<p> Lokal: ${shops.titel} </br> Adresse: ${shops.info} </br> Telefon: ${shops.attribute1} </br> online: <a href='${shops.metadaten}'>${shops.metadaten}</a>  </br> EMail:<a href="${shops.attribute2}">${shops.attribute2}</a> </br> Öffnungszeiten:</br> ${shops.attribute3} </br></p>`);

}
//Funktioniert noch nicht, keine ahnung warum??!!
for (i = 0; i < nightlife_latesnack_ibkDaten.length; i++){
    const ls = nightlife_latesnack_ibkDaten[i];
        
    L.marker([ls.lat,ls.lng], lsmarkerOptions).addTo(latesnacksMarker).bindPopup(`<p> Lokal: ${ls.titel} </br> Adresse: ${ls.info} </br> Telefon: ${ls.attribute1} </br> online: <a href='${ls.metadaten}'>${ls.metadaten}</a>  </br> EMail:<a href="${ls.attribute2}">${ls.attribute2}</a> </br> Öffnungszeiten:</br> ${ls.attribute3} </br></p>`);
    /*console.log(ls.lat);
    console.log(ls.lng);
    console.log(ls.titel);
    console.log(ls.info);
    console.log(ls.metadaten);
    console.log(ls.attribute1);
    console.log(ls.attribute2);
    console.log(ls.attribute3);*/
 }

//Start Ansicht - Zoom
myMap.setView([47.26,11.39],14);

//Leaflet Hash Plugin (3)
const hash = new L.Hash(myMap);

/* 
//Leaflet Search als Control hinzufügen (4)
    myMap.addControl(new L.Control.Search({
        layer: clustergrp,
        propertyName: "titel"
        })
    );*/

//Start auf MarkerGruppe
//myMap.fitBounds(breakfastMarker.getBounds()); 

//ENDE