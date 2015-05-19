var hotelIcon = L.icon({
    iconUrl: 'static/img/hotel.png',

    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var parkingIcon = L.icon({
    iconUrl: 'static/img/parking.png',

    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map',{
        center: new L.LatLng(36.6197,-121.9380),
        zoom: 14,
        scrollWheelZoom: false
        });

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 22,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7',
}).addTo(map);

var popup = L.popup();
