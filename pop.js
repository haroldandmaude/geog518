mapboxgl.accessToken = 'pk.eyJ1IjoidHVyZHMiLCJhIjoiY2l6dDE3ZzFyMDA4dTJ3b2RjOHQ2aWdkMCJ9.QYFwgXW-T36RBQLoHeMRMQ';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //hosted style id
    zoom: 8.5,
    center: [-83.9593188, 35.91],
});

map.addControl(new mapboxgl.NavigationControl());

var enviro = ['US-Census-Urban-Areas', 'ETQG-Region', 'Farmers-Market', 'Historical-Landmarks', 'Transnational-Companies', 'EPA-Brownfield-Sites', 'Parks', 'Healthcare'];
var census = ['Longtime-Residents', 'Percent-Rural-Population', 'Recent-Movers', 'Total-Population', 'Percent-Urban-Population', 'Retired-Population', 'Median-Age', 'Work-at-Home-Population', 'Percent-Some-College', 'Percent-Highschool-Diploma', 'Percent-Bachelors-Degree', 'Median-Household-Income'];
var sub = enviro.concat(census);
var legends = {'Total-Population': 'Total-Population-Legend', 'Recent-Movers': 'Recent-Movers-Legend', 'Median-Age': 'Median-Age-Legend', 'Work-at-Home-Population': 'Work-at-Home-Population-Legend', 'Retired-Population': 'Retired-Population-Legend', 'Percent-Rural-Population': 'Percent-Rural-Population-Legend', 'Percent-Urban-Population': 'Percent-Urban-Population-Legend', 'Longtime-Residents': 'Longtime-Residents-Legend', 'Percent-Some-College': 'Percent-Some-College-Legend', 'Percent-Highschool-Diploma': 'Percent-Highschool-Diploma-Legend', 'Percent-Bachelors-Degree': 'Percent-Bachelors-Degree-Legend', 'Median-Household-Income': 'Median-Household-Income-Legend'};

var all_labels = ['Urban-label', 'ETQG-label', 'Market-label', 'Landmarks-label', 'Companies-label', 'EPA-label','Parks-label', 'Tracts-label' ];

// var all_layers = sub.concat(all_labels);




var vis_status = {};
var label_status = {};

for (var i = 0; i < sub.length; i++) {
    var id = sub[i];
    vis_status[id] = 'none';
};

for (var i = 0; i < all_labels.length; i++) {
    var id = all_labels[i];
    label_status[id] = 'none';
};
console.log(all_labels);
///sub loop
for (var i = 0; i < sub.length; i++) {
    var id = sub[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'menu';
    link.textContent = id;
    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        var clickedLegend = document.getElementById(legends[clickedLayer]);

        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = 'none';
            vis_status[clickedLayer] = 'none';
            clickedLegend.style.display = 'none';

        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            vis_status[clickedLayer] = 'visible';
            clickedLegend.style.display = 'block';

        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
};

// LABELS loop
for (var i = 0; i < all_labels.length; i++) {
    var id = all_labels[i];

    var link = document.createElement('b');
    link.href = '#';
    link.className = 'menu2';
    link.textContent = id;
    link.onclick = function (e) {
        var clickedLayer2 = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer2, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer2, 'visibility', 'none');
            this.className = 'none';
            label_status[clickedLayer2] = 'none';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer2, 'visibility', 'visible');
            label_status[clickedLayer2] = 'visible';
        }
    };

    var layers = document.getElementById('menu2');
    layers.appendChild(link);
};


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
                 "Name: " + e.features[0].properties.name + "<br>" +
                 "City: " + e.features[0].properties.city + "<br>" +
                 "Address: " + e.features[0].properties.address + " " + e.features[0].properties.zip)
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
                 "Telephone: " + e.features[0].properties.Telephone + "<br>" +
                 "Website: " + e.features[0].properties.Website)
        .addTo(map);
});

//Healthcare Snapshot
map.on('click', 'Healthcare', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Healthcare Overview" + "<br>" +
                 "Percent Low Birth Weight: " + e.features[0].properties["Percent Low Birth Weight"] + "<br>" +
                 "Percent Unemployed: " + e.features[0].properties["Percent Unemployed"] + "<br>" +
                 "Percent Excessive Drinking: " + e.features[0].properties["Percent Excessive Drinking"] + "<br>" +
                 "Food Environment Index: " + e.features[0].properties["Food Environment Index"] + "<br>" +
                 "Ratio People per Dentist: " + e.features[0].properties["Percent Unemployed"] + "<br>" +
                 "Percent Fair Health and Below: " + e.features[0].properties["Percent Fair Health and Below"] + "<br>" +
                 "Teen Birth Rate: " + e.features[0].properties["Teen Birth Rate"] + "<br>" +
                 "Percent Obese: " + e.features[0].properties["Percent Obese"] + "<br>" +
                 "Ratio People per Physician: " + e.features[0].properties["Ratio People per Physician"] + "<br>" +
                 "Percent Physically Inactive: " + e.features[0].properties["Percent Physically Inactive"] + "<br>" +
                 "Percent Access to Exercise Opportunities: " + e.features[0].properties["Percent Access to Exercise Opportunities"] + "<br>" +
                 "Premature Deaths: " + e.features[0].properties["Premature Deaths"] + "<br>" +
                 "Percent Smokers: " + e.features[0].properties["Percent Smokers"] + "<br>" +
                 "Injury Death Rate: " + e.features[0].properties["Injury Death Rate"] + "<br>" +
                 "Percent Uninsured: " + e.features[0].properties["Percent Uninsured"] + "<br>" +
                 "Percent Receiving Diabetic Monitoring: " + e.features[0].properties["Percent Receiving Diabetic Monitoring"])
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

map.on('click', 'Percent-Some-College', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Percent-Some-College" + "<br>" +
                 "2012: " + e.features[0].properties["% Some College 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["% Some College 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["% Some College 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["% Some College 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["% Some College 2016"])
        .addTo(map);
});

map.on('click', 'Percent-Highschool-Diploma', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Percent-Highschool-Diploma" + "<br>" +
                 "2012: " + e.features[0].properties["% Highschool Diploma 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["% Highschool Diploma 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["% Highschool Diploma 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["% Highschool Diploma 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["% Highschool Diploma 2016"])
        .addTo(map);
});

map.on('click', 'Percent-Bachelors-Degree', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Percent-Bachelors-Degree" + "<br>" +
                 "2012: " + e.features[0].properties["% Bachelors Degree 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["% Bachelors Degree 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["% Bachelors Degree 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["% Bachelors Degree 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["% Bachelors Degree 2016"])
        .addTo(map);
});

map.on('click', 'Median-Household-Income', function (e) {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Median-Household-Income" + "<br>" +
                 "2012: " + e.features[0].properties["Median HH Income 2012"] + "<br>" +
                 "2013: " + e.features[0].properties["Median HH Income 2013"] + "<br>" +
                 "2014: " + e.features[0].properties["Median HH Income 2014"] + "<br>" +
                 "2015: " + e.features[0].properties["Median HH Income 2015"] + "<br>" +
                 "2016: " + e.features[0].properties["Median HH Income 2016"])
        .addTo(map);
});


//loop over layers, make cursor point when over and not when leave
for (var i = 0; i < sub.length; i++) {
    var id = sub[i];
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
          [20, '#fee8c8'],
          [40, '#fdd49e'],
          [60,'#fdbb84'],
          [90,'#fc9f74'],
          [115,'#fddbc7'],
          [140,'#fc8d59'],
          [160,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Percent-Rural-Population', 'fill-color',{
    property:"% Rural Population 2016",
    // property:.[1],
    stops:[
          [10, '#fff7ec'],
          [20, '#fee8c8'],
          [30, '#fdd49e'],
          [40,'#fdbb84'],
          [50,'#fc9f74'],
          [60,'#fddbc7'],
          [70,'#fc8d59'],
          [80,'#ef6548'],
          [90,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Recent-Movers', 'fill-color',{
    property:"Population (recently moved) 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [20, '#fee8c8'],
          [40, '#fdd49e'],
          [60,'#fdbb84'],
          [90,'#fc9f74'],
          [115,'#fddbc7'],
          [140,'#fc8d59'],
          [160,'#ef6548'],
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
          [1000, '#fcebd4']
          [2000, '#fee8c8'],
          [3000, '#fdd49e'],
          [4000,'#fdbb84'],
          [5000,'#fc9f74'],
          [6000,'#fc8d59'],
          [7000,'#ef6548'],
          [8000,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Percent-Urban-Population', 'fill-color',{
    property:"% Urban Population 2016",
    // property:.[1],
    stops:[
          [10, '#fff7ec'],
          [20, '#fee8c8'],
          [30, '#fdd49e'],
          [40,'#fdbb84'],
          [50,'#fc9f74'],
          [60,'#fddbc7'],
          [70,'#fc8d59'],
          [80,'#ef6548'],
          [90,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Retired-Population', 'fill-color',{
    property:"Population (retired) 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [20, '#fee8c8'],
          [40, '#fdd49e'],
          [60,'#fdbb84'],
          [90,'#fc9f74'],
          [115,'#fddbc7'],
          [140,'#fc8d59'],
          [160,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Median-Age', 'fill-color',{
    property:"Median Age 2016",
    // property:.[1],
    stops:[
          [20, '#fff7ec'],
          [25, '#fee8c8'],
          [30, '#fdd49e'],
          [35,'#fdbb84'],
          [40,'#fc9f74'],
          [45,'#fddbc7'],
          [50,'#fc8d59'],
          [55,'#ef6548'],
          [60,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Work-at-Home-Population', 'fill-color',{
    property:"Population (work at home) 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [20, '#fee8c8'],
          [40, '#fdd49e'],
          [60,'#fdbb84'],
          [90,'#fc9f74'],
          [115,'#fddbc7'],
          [140,'#fc8d59'],
          [160,'#ef6548'],
          [185,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Percent-Some-College', 'fill-color',{
    property:"% Some College 2016",
    // property:.[1],
    stops:[
          [10, '#fff7ec'],
          [20, '#fee8c8'],
          [30, '#fdd49e'],
          [40,'#fdbb84'],
          [50,'#fc9f74'],
          [60,'#fddbc7'],
          [70,'#fc8d59'],
          [80,'#ef6548'],
          [90,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Percent-Highschool-Diploma', 'fill-color',{
    property:"% Highschool Diploma 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [10, '#fee8c8'],
          [30, '#fdd49e'],
          [40,'#fdbb84'],
          [50,'#fddbc7'],
          [60,'#fc8d59'],
          [70,'#ef6548'],
          [90,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Percent-Bachelors-Degree', 'fill-color',{
    property:"% Bachelors Degree 2016",
    // property:.[1],
    stops:[
          [0, '#fff7ec'],
          [10, '#fee8c8'],
          [30, '#fdd49e'],
          [40,'#fdbb84'],
          [50,'#fddbc7'],
          [60,'#fc8d59'],
          [70,'#ef6548'],
          [90,'#990000'],
          ]
        });
})

map.on('load', function(){
  map.setPaintProperty('Median-Household-Income', 'fill-color',{
    property:"Median HH Income 2016",
    // property:.[1],
    stops:[
          [10000, '#fff7ec'],
          [30000, '#fee8c8'],
          [50000, '#fdd49e'],
          [60000,'#fdbb84'],
          [80000,'#fddbc7'],
          [90000,'#fc8d59'],
          [110000,'#ef6548'],
          [130000,'#990000'],
          ]
        });
})
