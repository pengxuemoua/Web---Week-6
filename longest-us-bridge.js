let usMapCoordinates = [37.6000 , -95.6650] 
let zoomLevel = 4 

let map = L.map('us-bridge').setView(usMapCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

//Put all the data into an array of objects
bridges = [
    {"name": "Verrazano-Narrows Bridge", "location": "New York, NY", "span" : 1298.4, "coordinates": [40.6066, -74.0447] },
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span" : 1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span" : 1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge" ,"location": "New York, NY and New Jersey, NJ", "span" : 1067.0, "coordinates": [40.8517, -73.9527] },
    {"name": "Tacoma Narrows Bridge", "location": "	Tacoma and Kitsap, WA", "span" : 853.44, "coordinates": [47.2690, -122.5517] }
]

var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',

    iconSize: [25, 50], // size of the icon
});

// loop over that array to create the markers and popups
bridges.forEach(function(usBridges) {
    // todo draw a marker
    let markerText = `${usBridges.name}<br> Span: ${usBridges.span} meters`
    L.marker(usBridges.coordinates, {icon: bridgeIcon} ).addTo(map)
})

// L.marker([40.6066, -74.0447], {icon: bridgeIcon}).addTo(map);