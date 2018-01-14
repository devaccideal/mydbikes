function initMap() {

    // Your text bubble
    var YourAddress = '<div id="content">' +
        '<h3>MYD BIKES</h3>' +
        '<p>Address Line 1</p>' +
        '<p>Phone: (94 123456789)' +
        '</div>';

    // Your Position
    var myLatlng = new google.maps.LatLng(6.002902, 80.2643223);

    // Map Styling
    var styledMapType = new google.maps.StyledMapType(
        [{
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#1c3541"
            }, {
                "weight": "0.01"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#5bc0be"
            }, {
                "weight": "0.10"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "hue": "#ffffff"
            }, {
                "saturation": -100
            }, {
                "lightness": 100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "hue": "#00ff00"
            }, {
                "saturation": -100
            }, {
                "lightness": 100
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#008eff"
            }, {
                "saturation": -93
            }, {
                "lightness": 31
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "hue": "#008eff"
            }, {
                "saturation": -93
            }, {
                "lightness": 31
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [{
                "hue": "#008eff"
            }, {
                "saturation": -93
            }, {
                "lightness": -2
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#007fff"
            }, {
                "saturation": -90
            }, {
                "lightness": -8
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "hue": "#007fff"
            }, {
                "saturation": 10
            }, {
                "lightness": 69
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "hue": "#007fff"
            }, {
                "saturation": -78
            }, {
                "lightness": 67
            }, {
                "visibility": "simplified"
            }]
        }], { name: 'MYD' });

    // Create a map object, and include the MapTypeId to add
    // to the map type control.

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        zoom: 16,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['styled_map', 'roadmap']
        }
    });

    var marker = new google.maps.Marker({
        position: myLatlng
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    var infowindow = new google.maps.InfoWindow({
        content: YourAddress
    });
    marker.setMap(map);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}
