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


// map.on('click', 'Retired-Population', function (e) {
//     new mapboxgl.Popup()
//         .setLngLat(e.lngLat)
//         .setHTML(e.features[0].properties["Population (retired) 2012"])
//         .addTo(map);
// });
//
// // Change the cursor to a pointer when the mouse is over the states layer.
// map.on('mouseenter', 'Retired-Population', function () {
//     map.getCanvas().style.cursor = 'pointer';
// });
//
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'Retired-Population', function () {
//     map.getCanvas().style.cursor = '';
// });

// test
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point);
    document.getElementById('features').innerHTML = JSON.stringify(features, null, 2);
});
