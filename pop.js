mapboxgl.accessToken = 'pk.eyJ1IjoidHVyZHMiLCJhIjoiY2l6dDE3ZzFyMDA4dTJ3b2RjOHQ2aWdkMCJ9.QYFwgXW-T36RBQLoHeMRMQ';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //hosted style id
    zoom: 8.5,
    center: [-83.9593188, 35.91],
});

map.addControl(new mapboxgl.NavigationControl());

var enviro = ['US-Census-Urban-Areas', 'ETQG-Region', 'Farmers-Market', 'Historical-Landmarks', 'Transnational-Companies', 'EPA-Brownfield-Sites', 'Parks'];
var census = ['Longtime-Residents', 'Percent-Rural-Population', 'Recent-Movers', 'Total-Population', 'Percent-Urban-Population', 'Retired-Population', 'Median-Age', 'Work-at-Home-Population'];
var all_layers = enviro.concat(census);

var vis_status = {};

for (var i = 0; i < all_layers.length; i++) {
    var id = all_layers[i];
    vis_status[id] = 'none';
};    

///all_layers loop
for (var i = 0; i < all_layers.length; i++) {
    var id = all_layers[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'menu';
    link.textContent = id;
    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = 'none';
            vis_status[clickedLayer] = 'none';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            vis_status[clickedLayer] = 'visible';
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}

// POP UP FUNCTIONS

//Historical Landmarks
map.on('click', 'Historical-Landmarks', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML("Historical-Landmarks" + "<br>" +
                 "County: " + e.features[0].properties.County + "<br>" +
                 "Name: " + e.features[0].properties.Name)
        .addTo(map);
});

//Farmers Markets
map.on('click', 'Farmers-Market', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML("Farmers-Market" + "<br>" +
                 "Name: " + e.features[0].properties.Name + "<br>" +
                 "City: " + e.features[0].properties.City + "<br>" +
                 "Address: " + e.features[0].properties.Address)
        .addTo(map);
});

//Transnational Companies
map.on('click', 'Transnational-Companies', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML("Transnational-Companies" + "<br>" +
                 "Company: " + e.features[0].properties.Company + "<br>" +
                 "Subsidiary: " + e.features[0].properties.Subsidiary + "<br>" +
                 "Address: " + e.features[0].properties.Address + "<br>" +
                 "Telephone: " + e.features[0].properties.Telephone)
        .addTo(map);
});

//EPA Brownfield Sites
map.on('click', 'EPA-Brownfield-Sites', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.features[0].geometry.coordinates)
        .setHTML("EPA-Brownfield-Sites" + "<br>" +
                 "Name: " + e.features[0].properties.Name)
        .addTo(map);
});

//Parks
map.on('click', 'Parks', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Parks" + "<br>" +
                 "Name: " + e.features[0].properties.Name)
        .addTo(map);
});

//ETQG Region
map.on('click', 'ETQG-Region', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("ETQG-Region" + "<br>" +
                 e.features[0].properties.NAMELSAD)
        .addTo(map);
});


map.on('click', 'Longtime-Residents', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Longtime-Residents" + "<br>" +
                 "2012: " + e.features[0].properties["Population (longtime residents) 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["Population (longtime residents) 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["Population (longtime residents) 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["Population (longtime residents) 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["Population (longtime residents) 2016"])
        .addTo(map);
});

map.on('click', 'Percent-Rural-Population', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Percent-Rural-Population" + "<br>" +
                 "2012: "+ e.features[0].properties["% Rural Population 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["% Rural Population 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["% Rural Population 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["% Rural Population 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["% Rural Population 2016"])
        .addTo(map);
});

map.on('click', 'Recent-Movers', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Recent-Movers" + "<br>" +
                 "2012: " + e.features[0].properties["Population (recently moved) 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["Population (recently moved) 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["Population (recently moved) 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["Population (recently moved) 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["Population (recently moved) 2016"])
        .addTo(map);
});

map.on('click', 'Total-Population', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Total-Population" + "<br>" +
                 "2012: " + e.features[0].properties["Population (total) 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["Population (total) 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["Population (total) 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["Population (total) 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["Population (total) 2016"])
        .addTo(map);
});

map.on('click', 'Percent-Urban-Population', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Percent-Urban-Population" + "<br>" +
                 "2012: " + e.features[0].properties["% Urban Population 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["% Urban Population 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["% Urban Population 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["% Urban Population 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["% Urban Population 2016"])
        .addTo(map);
});

map.on('click', 'Retired-Population', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Retired-Population" + "<br>" +
                 "2012: " + e.features[0].properties["Population (retired) 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["Population (retired) 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["Population (retired) 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["Population (retired) 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["Population (retired) 2016"])
        .addTo(map);
});

map.on('click', 'Median-Age', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Median-Age" + "<br>" +
                 "2012: " + e.features[0].properties["Median Age 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["Median Age 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["Median Age 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["Median Age 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["Median Age 2016"])
        .addTo(map);
});

map.on('click', 'Work-at-Home-Population', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Work-at-Home-Population" + "<br>" +
                 "2012: " + e.features[0].properties["Population (work at home) 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["Population (work at home) 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["Population (work at home) 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["Population (work at home) 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["Population (work at home) 2016"])
        .addTo(map);
});


//loop over layers, make cursor point when over and not when leave
for (var i = 0; i < all_layers.length; i++) {
    var id = all_layers[i];
    map.on('mouseenter',id,function(){
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', id, function () {
        map.getCanvas().style.cursor = '';
    });

}

//basemap
var layerList = document.getElementById('change-base');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
};

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
};

map.on('load', function(){
  map.setPaintProperty('Longtime-Residents', 'fill-color',{
    property:"Population (longtime residents) 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [4, '#fee8c8'],
          [30, '#fdd49e'],
          [70,'#fdbb84'],
          [100,'#fddbc7'],
          [130,'#fc8d59'],
          [170,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Percent-Rural-Population', 'fill-color',{
    property:"% Rural Population 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [4, '#fee8c8'],
          [30, '#fdd49e'],
          [70,'#fdbb84'],
          [100,'#fddbc7'],
          [130,'#fc8d59'],
          [170,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Recent-Movers', 'fill-color',{
    property:"Population (recently moved) 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [4, '#fee8c8'],
          [30, '#fdd49e'],
          [70,'#fdbb84'],
          [100,'#fddbc7'],
          [130,'#fc8d59'],
          [170,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Total-Population', 'fill-color',{
    property:"Population (total) 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [4, '#fee8c8'],
          [30, '#fdd49e'],
          [70,'#fdbb84'],
          [100,'#fddbc7'],
          [130,'#fc8d59'],
          [170,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Percent-Urban-Population', 'fill-color',{
    property:"% Urban Population 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [4, '#fee8c8'],
          [30, '#fdd49e'],
          [70,'#fdbb84'],
          [100,'#fddbc7'],
          [130,'#fc8d59'],
          [170,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Retired-Population', 'fill-color',{
    property:"Population (retired) 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [10, '#fee8c8'],
          [20, '#fdd49e'],
          [30,'#fdbb84'],
          [40,'#fddbc7'],
          [50,'#fc8d59'],
          [65,'#ef6548'],
          [70,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Median-Age', 'fill-color',{
    property:"Median Age 2016",
    // property:.[1],
    stops:[
          [30, '#fff7ec'],
          [35, '#fee8c8'],
          [40, '#fdd49e'],
          [45,'#fdbb84'],
          [50,'#fddbc7'],
          [55,'#fc8d59'],
          [60,'#ef6548'],
          [65,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Work-at-Home-Population', 'fill-color',{
    property:"Population (work at home) 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [4, '#fee8c8'],
          [30, '#fdd49e'],
          [70,'#fdbb84'],
          [100,'#fddbc7'],
          [130,'#fc8d59'],
          [170,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

