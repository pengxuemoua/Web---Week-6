let metroAreaCenterCoordinates = [44.96,-93.2] //44.96 is latitude, -93.2 is longitude
let zoomLevel = 9 // 1 = whole world, 20 = city with blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

campuses = [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College" ,"website": "https://nhcc.edu", "coordinates": [45.1054232, -93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu", "coordinates": [45.0438494, -92.9862026] }
]

campuses.forEach(function(collegeCampus) {
    // todo draw a marker
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}"> Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})

// let mctcCoods = [44.9724,-93.2844]<br><a href="https://minneapolis.edu"> MCTC Website</a>
// let mctcMarker = L.marker(mctcCoods)
// .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu"> MCTC Website</a>')
// .addTo(map)

// let stpaulCoods = [44.9483,-93.1099]
// let stpaulMarker = L.marker(stpaulCoods)
// .bindPopup('St Paul College<br><a href="https://saintpaul.edu"> St Paul Website</a>')
// .addTo(map)

// let normandaleCollege = [44.8297,-93.3312]
// let normandaleMarker = L.marker(normandaleCollege)
// .bindPopup('Normandale Community College<br><a href="https://normandale.edu"> Normandale Website</a>')
// .addTo(map)

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,
    fillOpacity: 0.1
})
.bindPopup('Twin Cities Metro Area')
.addTo(map)