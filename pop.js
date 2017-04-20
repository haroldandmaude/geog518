mapboxgl.accessToken = 'pk.eyJ1IjoidHVyZHMiLCJhIjoiY2l6dDE3ZzFyMDA4dTJ3b2RjOHQ2aWdkMCJ9.QYFwgXW-T36RBQLoHeMRMQ';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v10', //hosted style id
    center: [-83.9, 35.86], // starting position
    zoom: 8 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

var toggleableLayerIds = [ 'Longtime-Residents', 'Percent-Rural-Population', 'Recent-Movers', 'Total-Population', 'Percent-Urban-Population', 'Retired-Population', 'Median-Age', 'Work-at-Home-Population' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}


var years = [ '2012', '2013', '2014', '2015', '2016' ]
