 
$(document).ready(function(){

    $('#staticBackdrop').on('shown.bs.modal', function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGVyZXNpIiwiYSI6ImNrdWQ4NWZmZjE1cW0zMW12bjc3YXY1MXEifQ.IC8CEmxhDt2CgjqVwLG97A';
        initializeMap();
    });  
  });
function initializeMap(){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-77.034084142948, 38.909671288923],
        zoom: 9,
        scrollZoom: true
        });


 
const stores = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.034084142948, 38.909671288923]
},
'properties': {
'phoneFormatted': '(202) 234-7336',
'phone': '2022347336',
'address': '1471 P St NW',
'city': 'Washington DC',
'country': 'United States',
'crossStreet': 'at 15th St NW',
'postalCode': '20005',
'state': 'D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.049766, 38.900772]
},
'properties': {
'phoneFormatted': '(202) 507-8357',
'phone': '2025078357',
'address': '2221 I St NW',
'city': 'Washington DC',
'country': 'United States',
'crossStreet': 'at 22nd St NW',
'postalCode': '20037',
'state': 'D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.043929, 38.910525]
},
'properties': {
'phoneFormatted': '(202) 387-9338',
'phone': '2023879338',
'address': '1512 Connecticut Ave NW',
'city': 'Washington DC',
'country': 'United States',
'crossStreet': 'at Dupont Circle',
'postalCode': '20036',
'state': 'D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.0672, 38.90516896]
},
'properties': {
'phoneFormatted': '(202) 337-9338',
'phone': '2023379338',
'address': '3333 M St NW',
'city': 'Washington DC',
'country': 'United States',
'crossStreet': 'at 34th St NW',
'postalCode': '20007',
'state': 'D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.002583742142, 38.887041080933]
},
'properties': {
'phoneFormatted': '(202) 547-9338',
'phone': '2025479338',
'address': '221 Pennsylvania Ave SE',
'city': 'Washington DC',
'country': 'United States',
'crossStreet': 'btwn 2nd & 3rd Sts. SE',
'postalCode': '20003',
'state': 'D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-76.933492720127, 38.99225245786]
},
'properties': {
'address': '8204 Baltimore Ave',
'city': 'College Park',
'country': 'United States',
'postalCode': '20740',
'state': 'MD'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.097083330154, 38.980979]
},
'properties': {
'phoneFormatted': '(301) 654-7336',
'phone': '3016547336',
'address': '4831 Bethesda Ave',
'cc': 'US',
'city': 'Bethesda',
'country': 'United States',
'postalCode': '20814',
'state': 'MD'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.359425054188, 38.958058116661]
},
'properties': {
'phoneFormatted': '(571) 203-0082',
'phone': '5712030082',
'address': '11935 Democracy Dr',
'city': 'Reston',
'country': 'United States',
'crossStreet': 'btw Explorer & Library',
'postalCode': '20190',
'state': 'VA'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.10853099823, 38.880100922392]
},
'properties': {
'phoneFormatted': '(703) 522-2016',
'phone': '7035222016',
'address': '4075 Wilson Blvd',
'city': 'Arlington',
'country': 'United States',
'crossStreet': 'at N Randolph St.',
'postalCode': '22203',
'state': 'VA'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-75.28784, 40.008008]
},
'properties': {
'phoneFormatted': '(610) 642-9400',
'phone': '6106429400',
'address': '68 Coulter Ave',
'city': 'Ardmore',
'country': 'United States',
'postalCode': '19003',
'state': 'PA'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-75.20121216774, 39.954030175164]
},
'properties': {
'phoneFormatted': '(215) 386-1365',
'phone': '2153861365',
'address': '3925 Walnut St',
'city': 'Philadelphia',
'country': 'United States',
'postalCode': '19104',
'state': 'PA'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-77.043959498405, 38.903883387232]
},
'properties': {
'phoneFormatted': '(202) 331-3355',
'phone': '2023313355',
'address': '1901 L St. NW',
'city': 'Washington DC',
'country': 'United States',
'crossStreet': 'at 19th St',
'postalCode': '20036',
'state': 'D.C.'
}
}
]
};
 
/**
* Assign a unique id to each store. You'll use this `id`
* later to associate each point on the map with a listing
* in the sidebar.
*/
stores.features.forEach((store, i) => {
store.properties.id = i;
});
 
/**
* Wait until the map loads to make changes to the map.
*/
map.on('load', () => {
/**
* This is where your '.addLayer()' used to be, instead
* add only the source without styling a layer
*/
map.addSource('places', {
'type': 'geojson',
'data': stores
});
 
/**
* Create a new MapboxGeocoder instance.
*/
const geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl,
marker: true,
bbox: [-77.210763, 38.803367, -76.853675, 39.052643]
});
 
/**
* Add all the things to the page:
* - The location listings on the side of the page
* - The search box (MapboxGeocoder) onto the map
* - The markers onto the map
*/
// buildLocationList(stores);
map.addControl(geocoder, 'top-left');
addMarkers();
 
/**
* Listen for when a geocoder result is returned. When one is returned:
* - Calculate distances
* - Sort stores by distance
* - Rebuild the listings
* - Adjust the map camera
* - Open a popup for the closest store
* - Highlight the listing for the closest store.
*/
geocoder.on('result', ({ result }) => {
/* Get the coordinate of the search result */
const searchResult = result.geometry;
 
/**
* Calculate distances:
* For each store, use turf.disance to calculate the distance
* in miles between the searchResult and the store. Assign the
* calculated value to a property called `distance`.
*/
const options = { units: 'miles' };
for (const store of stores.features) {
store.properties.distance = turf.distance(
searchResult,
store.geometry,
options
);
}
 
/**
* Sort stores by distance from closest to the `searchResult`
* to furthest.
*/
stores.features.sort((a, b) => {
if (a.properties.distance > b.properties.distance) {
return 1;
}
if (a.properties.distance < b.properties.distance) {
return -1;
}
return 0; // a must be equal to b
});
 
/**
* Rebuild the listings:
* Remove the existing listings and build the location
* list again using the newly sorted stores.
*/

// buildLocationList(stores);
 
/* Open a popup for the closest store. */
createPopUp(stores.features[0]);
 
/** Highlight the listing for the closest store. */
// const activeListing = document.getElementById(
// `listing-${stores.features[0].properties.id}`
// );
// activeListing.classList.add('active');
 
/**
* Adjust the map camera:
* Get a bbox that contains both the geocoder result and
* the closest store. Fit the bounds to that bbox.
*/
const bbox = getBbox(stores, 0, searchResult);
map.fitBounds(bbox, {
padding: 49
});
});
});
/**
* Using the coordinates (lng, lat) for
* (1) the search result and
* (2) the closest store
* construct a bbox that will contain both points
*/
function getBbox(sortedStores, storeIdentifier, searchResult) {
const lats = [
sortedStores.features[storeIdentifier].geometry.coordinates[1],
searchResult.coordinates[1]
];
const lons = [
sortedStores.features[storeIdentifier].geometry.coordinates[0],
searchResult.coordinates[0]
];
const sortedLons = lons.sort((a, b) => {
if (a > b) {
return 1;
}
if (a.distance < b.distance) {
return -1;
}
return 0;
});
const sortedLats = lats.sort((a, b) => {
if (a > b) {
return 1;
}
if (a.distance < b.distance) {
return -1;
}
return 0;
});
return [
[sortedLons[0], sortedLats[0]],
[sortedLons[1], sortedLats[1]]
];
}
 
/**
* Add a marker to the map for every store listing.
**/
function addMarkers() {
/* For each feature in the GeoJSON object above: */
for (const marker of stores.features) {
/* Create a div element for the marker. */
const el = document.createElement('div');
/* Assign a unique `id` to the marker. */
el.id = `marker-${marker.properties.id}`;
/* Assign the `marker` class to each marker for styling. */
el.className = 'marker';
 
/**
* Create a marker using the div element
* defined above and add it to the map.
**/
new mapboxgl.Marker(el, { offset: [0, -23] })
.setLngLat(marker.geometry.coordinates)
.addTo(map);
 
/**
* Listen to the element and when it is clicked, do three things:
* 1. Fly to the point
* 2. Close all other popups and display popup for clicked store
* 3. Highlight listing in sidebar (and remove highlight for all other listings)
**/
el.addEventListener('click', (e) => {
flyToStore(marker);
createPopUp(marker);
const activeItem = document.getElementsByClassName('active');
e.stopPropagation();
if (activeItem[0]) {
activeItem[0].classList.remove('active');
}

});
}
}
 
/**
* Add a listing for each store to the sidebar.
**/
// function buildLocationList({ features }) {
// for (const { properties } of features) {
// /* Add a new listing section to the sidebar. */
// const listings = document.getElementById('listings');
// const listing = listings.appendChild(document.createElement('div'));
/* Assign a unique `id` to the listing. */
// listing.id = `listing-${properties.id}`;
/* Assign the `item` class to each listing for styling. */
// listing.className = 'item';
 
/* Add the link to the individual listing created above. */
// const link = listing.appendChild(document.createElement('a'));
// link.href = '#';
// link.className = 'title';
// link.id = `link-${properties.id}`;
// link.innerHTML = `${properties.address}`;
 
/* Add details to the individual listing. */
// const details = listing.appendChild(document.createElement('div'));
// details.innerHTML = `${properties.city}`;
// if (properties.phone) {
// details.innerHTML += ` &middot; ${properties.phoneFormatted}`;
// }
// if (properties.distance) {
// const roundedDistance = Math.round(properties.distance * 100) / 100;
// details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
// }
 
/**
* Listen to the element and when it is clicked, do four things:
* 1. Update the `currentFeature` to the store associated with the clicked link
* 2. Fly to the point
* 3. Close all other popups and display popup for clicked store
* 4. Highlight listing in sidebar (and remove highlight for all other listings)
**/
// link.addEventListener('click', function () {
// for (const feature of features) {
// if (this.id === `link-${feature.properties.id}`) {
// flyToStore(feature);
// createPopUp(feature);
// }
// }
// const activeItem = document.getElementsByClassName('active');
// if (activeItem[0]) {
// activeItem[0].classList.remove('active');
// }
// this.parentNode.classList.add('active');
// });
// }
// }
 
/**
* Use Mapbox GL JS's `flyTo` to move the camera smoothly
* a given center point.
**/
function flyToStore(currentFeature) {
map.flyTo({
center: currentFeature.geometry.coordinates,
zoom: 5
});
}
 
/**
* Create a Mapbox GL JS `Popup`.
**/
function createPopUp(currentFeature) {
const popUps = document.getElementsByClassName('mapboxgl-popup');
if (popUps[0]) popUps[0].remove();
 
const popup = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat(currentFeature.geometry.coordinates)
.setHTML(
`<h6>${currentFeature.properties.address}</h6>`
)
.addTo(map);
}
}

