mapboxgl.accessToken = 'pk.eyJ1IjoidHVyZHMiLCJhIjoiY2l6dDE3ZzFyMDA4dTJ3b2RjOHQ2aWdkMCJ9.QYFwgXW-T36RBQLoHeMRMQ';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v10', //hosted style id
    center: [-83.9, 35.96], // starting position
    zoom: 9 // starting zoom
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


// var div = window.document.createElement('div');
// div.innerHTML = "<table style='width:100%'> \
// <tr> <th>Firstname</th> <th>Lastname</th> <th>Age</th> </tr> \
// <tr> <td>Jill</td> <td>Smith</td> <td>50</td> </tr> <tr> \
// <td>Eve</td> <td>Jackson</td> <td>94</td> </tr> </table>";


map.on('click', 'Retired-Population', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        // .setHTML(e.features[0].properties["Population (retired) 2012"] + "\n <br> 2013:" +  e.features[0].properties["Population (retired) 2013"])
        // .setDOMContent(div)
        // .setHTML("<table style = 'width:100%'> <tr> <th>" + e.features[0].properties["Population (retired) 2012"] + "</th> </tr> </table>"])
        // .setHTML(e.features[0].properties[sub]
        .addTo(map);

});


for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
    map.on('mouseenter',id,function(){
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', id, function () {
        map.getCanvas().style.cursor = '';
    });

}

// // Change the cursor to a pointer when the mouse is over the states layer.
// map.on('mouseenter', 'Retired-Population', function () {
//     map.getCanvas().style.cursor = 'pointer';
// });
//
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'Retired-Population', function () {
//     map.getCanvas().style.cursor = '';
// });


//basemap

var layerList = document.getElementById('change-base');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}
