/*

Ideen:
 * EventOn Funktion bei Control fitbound auf Overlay legen ?
 * Auswahlliste mit den jeweiligen Bars, Shops und Breakfasts?
 * Suchen Plugin als 4. Plugin einbinden?

 */

//Karte einbinden
let myMap = L.map("map");

// für MapControl und fitBounds
const preshopsMarker = L.featureGroup();//.addTo(myMap);
const barMarker = L.featureGroup();//.addTo(myMap);
const clubMarker = L.featureGroup();//.addTo(myMap);
const breakfastMarker = L.featureGroup();//.addTo(myMap);
const latesnacksMarker = L.featureGroup();//.addTo(myMap);
//Cluster Marker für Plugin
const clustergrp = L.featureGroup().addTo(myMap);

//für Plugin MarkerCluster (1)
const barclmarkers = L.markerClusterGroup().addTo(clustergrp);
const clubclmarkers = L.markerClusterGroup().addTo(clustergrp);
const breakfastclmarkers = L.markerClusterGroup().addTo(clustergrp);
const latesnacksclmarker = L.markerClusterGroup().addTo(clustergrp);
const shopsclmarker = L.markerClusterGroup().addTo(clustergrp);

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
    "Bars": barMarker,
    "Clubs": clubMarker,
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
//Breakfast
const myIconbf = L.icon({
    iconUrl: 'images/icons/restaurant_breakfast(2).png',
    iconAnchor: [16, 37]
});
//PreShops
const myIconps = L.icon({
    iconUrl: 'images/icons/star-3.png',
    iconAnchor: [16, 37]
});
//Bars und Clubs
const myIconbar = L.icon({
    iconUrl: 'images/icons/bar.png',
    iconAnchor: [16, 37]
});
const myIconclub = L.icon({
    iconUrl: 'images/icons/bar_coktail.png',
    iconAnchor: [16, 37]
});
//Latenight Snacks
const myIconls = L.icon({
    iconUrl: 'images/icons/fastfood(2).png',
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
    opacity: 0.95,
    icon: myIconps,
}
const lsmarkerOptions = {
    title: "Latenight Snacks",
    //draggable: true,
    opacity: 0.95,
    icon: myIconls,
}
const barsmarkerOptions = {
    title: "Bars",
    //draggable: true,
    opacity: 0.95,
    icon: myIconbar,
}
const clubsmarkerOptions = {
    title: "Clubs",
    //draggable: true,
    opacity: 0.95,
    icon: myIconclub,
}
//Einzelne Marker erstellen und MarkerGruppe zuordnen inkl. Popup
//Marker Breakfast
for (i = 0; i < nightlife_bf_ibkDaten.length; i++){
    const bf = nightlife_bf_ibkDaten[i];
    L.marker([bf.lat,bf.lng], bfmarkerOptions).addTo(breakfastMarker).bindPopup(`<p><img src=${bf.image} style="width: 75px; height: 75px;"></img> </br> Lokal: ${bf.titel} </br> Adresse: ${bf.adresse} </br> Telefon: ${bf.telnr} </br> Online: <a href='${bf.link}'>${bf.link}</a>  </br> EMail:<a href="${bf.email}">${bf.email}</a> </br> Öffnungszeiten:</br> ${bf.opens} </br></p>`);
    L.marker([bf.lat,bf.lng], bfmarkerOptions).addTo(breakfastclmarkers).bindPopup(`<p><img src=${bf.image} style="width: 75px; height: 75px;"></img> </br> Lokal: ${bf.titel} </br> Adresse: ${bf.adresse} </br> Telefon: ${bf.telnr} </br> Online: <a href='${bf.link}'>${bf.link}</a>  </br> EMail:<a href="${bf.email}">${bf.email}</a> </br> Öffnungszeiten:</br> ${bf.opens} </br></p>`);
}
//marker Pre Shops
for (i = 0; i < nightlife_shops_ibkDaten.length; i++){
    const shops = nightlife_shops_ibkDaten[i];
    L.marker([shops.lat,shops.lng], shopsmarkerOptions).addTo(preshopsMarker).bindPopup(`<p><img src=${shops.image}></img> </br> Lokal: ${shops.titel} </br> Adresse: ${shops.adresse} </br> Reservierung: ${shops.telnr} </br> Online: <a href='${shops.link}'>${shops.link}</a>  </br> EMail:<a href="${shops.email}">${shops.email}</a> </br> Öffnungszeiten:</br> ${shops.opens} </br></p>`);
    L.marker([shops.lat,shops.lng], shopsmarkerOptions).addTo(shopsclmarker).bindPopup(`<p><img src=${shops.image}></img> </br> Lokal: ${shops.titel} </br> Adresse: ${shops.adresse} </br> Reservierung: ${shops.telnr} </br> Online: <a href='${shops.link}'>${shops.link}</a>  </br> EMail:<a href="${shops.email}">${shops.email}</a> </br> Öffnungszeiten:</br> ${shops.opens} </br></p>`);
  }
//Marker latenight Snacks
for (i = 0; i < nightlife_latesnack_ibkDaten.length; i++){
    const ls = nightlife_latesnack_ibkDaten[i];
    L.marker([ls.lat,ls.lng], lsmarkerOptions).addTo(latesnacksMarker).bindPopup(`<p><img src=${ls.image}></img> </br> Lokal: ${ls.titel} </br> Adresse: ${ls.adresse} </br> Reservierung: ${ls.telnr} </br> Online: <a href='${ls.link}'>${ls.link}</a>  </br> EMail:<a href="${ls.email}">${ls.email}</a> </br> Öffnungszeiten:</br> ${ls.opens} </br></p>`);
    L.marker([ls.lat,ls.lng], lsmarkerOptions).addTo(latesnacksclmarker).bindPopup(`<p><img src=${ls.image}></img> </br> Lokal: ${ls.titel} </br> Adresse: ${ls.adresse} </br> Reservierung: ${ls.telnr} </br> Online: <a href='${ls.link}'>${ls.link}</a>  </br> EMail:<a href="${ls.email}">${ls.email}</a> </br> Öffnungszeiten:</br> ${ls.opens} </br></p>`);
 }
 //Marker Bars und Clubs
for (i = 0; i < nightlife_bars_ibkDaten.length; i++){
    const bars = nightlife_bars_ibkDaten[i];
    L.marker([bars.lat,bars.lng], barsmarkerOptions).addTo(barMarker).bindPopup(`<p><img src=${bars.image}></img> </br> Lokal: ${bars.titel} </br> Adresse: ${bars.adresse} </br> Reservierung: ${bars.telnr} </br> Online: <a href='${bars.link}'>${bars.link}</a>  </br> EMail:<a href="${bars.email}">${bars.email}</a> </br> Öffnungszeiten:</br> ${bars.opens} </br></p>`);
    L.marker([bars.lat,bars.lng], barsmarkerOptions).addTo(barclmarkers).bindPopup(`<p><img src=${bars.image}></img> </br> Lokal: ${bars.titel} </br> Adresse: ${bars.adresse} </br> Reservierung: ${bars.telnr} </br> Online: <a href='${bars.link}'>${bars.link}</a>  </br> EMail:<a href="${bars.email}">${bars.email}</a> </br> Öffnungszeiten:</br> ${bars.opens} </br></p>`);
 }
 for (i = 0; i < nightlife_clubs_ibkDaten.length; i++){
    const club = nightlife_clubs_ibkDaten[i];
    L.marker([club.lat,club.lng], clubsmarkerOptions).addTo(clubMarker).bindPopup(`<p><img src=${club.image}></img> </br> Lokal: ${club.titel} </br> Adresse: ${club.adresse} </br> Reservierung: ${club.telnr} </br> Online: <a href='${club.link}'>${club.link}</a>  </br> EMail:<a href="${club.email}">${club.email}</a> </br> Öffnungszeiten:</br> ${club.opens} </br></p>`);
    L.marker([club.lat,club.lng], clubsmarkerOptions).addTo(clubclmarkers).bindPopup(`<p><img src=${club.image}></img> </br> Lokal: ${club.titel} </br> Adresse: ${club.adresse} </br> Reservierung: ${club.telnr} </br> Online: <a href='${club.link}'>${club.link}</a>  </br> EMail:<a href="${club.email}">${club.email}</a> </br> Öffnungszeiten:</br> ${club.opens} </br></p>`);
 }

//Start Ansicht - Zoom
//myMap.setView([47.26,11.39],14);

//Start auf MarkerGruppe
myMap.fitBounds(clustergrp.getBounds()); 

//Leaflet Hash Plugin (3)
const hash = new L.Hash(myMap);

/* 
//Leaflet Search als Control hinzufügen (4)
    myMap.addControl(new L.Control.Search({
        layer: clustergrp,
        propertyName: "titel"
        })
    );*/

//ENDE