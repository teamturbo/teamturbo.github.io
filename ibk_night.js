/*

Ideen:
 * EventOn Funktion bei Control fitbound auf Overlay legen ?
 * Auswahlliste mit den jeweiligen Bars, Shops und Breakfasts?
 * Suchen Plugin als 4. Plugin einbinden?

 */

//Karte einbinden
let myMap = L.map("map");

// für MapControl und fitBounds
//.addTo(myMap);
const latesnacksMarker = L.featureGroup().addTo(myMap);
const clustergrp = L.featureGroup().addTo(myMap);

//für Plugin MarkerCluster (1)
//const preshopsclmarkers = L.markerClusterGroup().addTo(myMap);
//const barclmarkers = L.markerClusterGroup().addTo(myMap);
const breakfastclmarkers = L.markerClusterGroup().addTo(clustergrp);
//
//ENDE