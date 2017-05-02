
var customLayers = [
                    //census layers
                    {source: {type: "vector", url: 'mapbox://turds.Work-at-Home-Population'}, layer: {id: "Work-at-Home-Population", source: "Work-at-Home-Population",'source-layer': "Work-at-Home-Population", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#3a3035', 'fill-outline-color':'#000000','fill-opacity':1}}},
                    {source: {type: "vector", url: 'mapbox://turds.Median-Age'}, layer: {id: "Median-Age",source:"Median-Age",'source-layer': "Median-Age", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':1}}},
                    {source: {type: "vector", url: 'mapbox://turds.Retired-Population'}, layer: {id: "Retired-Population",source:"Retired-Population",'source-layer': "Retired-Population", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#b2182b','fill-outline-color':'#000000','fill-opacity':1}}},
                    {source: {type: "vector", url: 'mapbox://turds.Percent-Urban-Population'}, layer: {id: "Percent-Urban-Population",source:"Percent-Urban-Population",'source-layer': "Percent-Urban-Population", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':1}}},
                    {source: {type: "vector", url: 'mapbox://turds.Total-Population'}, layer: {id: "Total-Population",source:"Total-Population",'source-layer': "Total-Population", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':1}}},
                    {source: {type: "vector", url: 'mapbox://turds.Recent-Movers'}, layer: {id: "Recent-Movers",source:"Recent-Movers",'source-layer': "Recent-Movers", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':1}}},
                    {source: {type: "vector", url: 'mapbox://turds.Percent-Rural-Population'}, layer: {id: "Percent-Rural-Population",source:"Percent-Rural-Population",'source-layer': "Percent-Rural-Population", type: "fill", 'layout': {'visibility': 'none'},paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':1}}},
                    {source: {type: "vector", url: 'mapbox://turds.Longtime-Residents'}, layer: {id: "Longtime-Residents",source:"Longtime-Residents",'source-layer': "Longtime-Residents", type: "fill",'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':1}}},
                    //enviro layers
                    {source: {type: "vector", url: "mapbox://turds.US-Census-Urban-Areas"}, layer: {id: "US-Census-Urban-Areas", source: "US-Census-Urban-Areas", type: "fill", 'source-layer': "US-Census-Urban-Areas", 'layout': {'visibility': 'none'}, paint: {'fill-color': 'rgba(128, 128, 128, 0.4)', 'fill-outline-color': 'rgba(128, 128, 128, 1)'}}},
                    {source: {type: "vector", url: "mapbox://turds.ETQG-Region"}, layer: {id: "ETQG-Region", source: "ETQG-Region", type: "fill", 'source-layer': "ETQG-Region", 'layout': {'visibility': 'none'}, paint: {'fill-color': 'rgba(16,130,33,0)', 'fill-outline-color': '#131413'}}},
                    {source: {type: "vector", url: "mapbox://turds.Parks"}, layer: {id: "Parks", source: "Parks", type: "fill", 'source-layer': "Parks", 'layout': {'visibility': 'none'}, paint: {'fill-color': 'rgba(16,130,33,0.8)', 'fill-outline-color': 'rgba(16,130,33,1)'}}},
                    {source: {type: "vector", url: "mapbox://turds.Transnational-Companies"}, layer: {id: "Transnational-Companies", source: "Transnational-Companies", type: "circle", 'source-layer': "Transnational-Companies", 'layout': {'visibility': 'none'}, paint: {'circle-radius': 8, 'circle-color': 'rgba(237,226,16,1)', "circle-stroke-width": 2, "circle-stroke-color": '#000'}}},
                    {source: {type: "vector", url: "mapbox://turds.Farmers-Market"}, layer: {id: "Farmers-Market", source: "Farmers-Market", type: "circle", 'source-layer': "Farmers-Market", 'layout': {'visibility': 'none'}, paint: {'circle-radius': 8, 'circle-color': '#4245f4', "circle-stroke-width": 2, "circle-stroke-color": '#000'}}},
                    {source: {type: "vector", url: "mapbox://turds.Historical-Landmarks"}, layer: {id: "Historical-Landmarks", source: "Historical-Landmarks", type: "circle", 'source-layer': "Historical-Landmarks", 'layout': {'visibility': 'none'}, paint: {'circle-radius': 8, 'circle-color': 'rgba(226,22,11,1)', "circle-stroke-width": 2, "circle-stroke-color": '#000'}}},
                    {source: {type: "vector", url: "mapbox://turds.EPA-Brownfield-Sites"}, layer: {id: "EPA-Brownfield-Sites", source: "EPA-Brownfield-Sites", type: "circle", 'source-layer': "EPA-Brownfield-Sites",'layout': {'visibility': 'none'}, paint: {'circle-radius': 8, 'circle-color': 'rgba(139,69,19,1)', "circle-stroke-width": 2, "circle-stroke-color": '#000'}}},
                    //labels
                  ];

var customLabels = [
                    {source: {type: "vector", url: 'mapbox://turds.Longtime-Residents'}, layer: {id: "Tracts",source:"Longtime-Residents",type:"symbol", 'source-layer': "Longtime-Residents", layout: {'visibility': 'none', 'text-field': "{Tract}","symbol-placement": "line"}}},
                    {source: {type: "vector", url: "mapbox://turds.US-Census-Urban-Areas"}, layer: {id: "Urban-label", source:"US-Census-Urban-Areas", type: "symbol", 'source-layer': "US-Census-Urban-Areas", layout:{'visibility':'none', "text-field": "{NAME}"}, paint:{"text-halo-width":2, "text-halo-color": 'rgba(255, 255, 255, .7)'}}},
                    {source: {type: "vector", url: "mapbox://turds.ETQG-Region"}, layer: {id: "ETQG-label", source:"ETQG-Region", type: "symbol", 'source-layer': "ETQG-Region", layout:{'visibility':'none', "text-field": "{NAME}"}}},
                    {source: {type: "vector", url: "mapbox://turds.Parks"}, layer: {id: "Parks-label", source:"Parks", type: "symbol", 'source-layer': "Parks", layout:{'visibility':'none', "text-field": "{Name}", "symbol-placement": "line", "text-size": 40 }}},
                    {source: {type: "vector", url: "mapbox://turds.Transnational-Companies"}, layer: {id: "Companies-label", source:"Transnational-Companies", type: "symbol", 'source-layer': "Transnational-Companies", layout:{'visibility':'none', "text-size": 4, "text-field": "{Company}", "text-anchor": 'bottom', "text-offset": [0,-1], "text-size": 24 }, paint:{"text-halo-width":2, "text-halo-color": 'rgba(255, 255, 255, .7)' }}},
                    {source: {type: "vector", url: "mapbox://turds.Farmers-Market"}, layer: {id: "Market-label", source:"Farmers-Market", type: "symbol", 'source-layer': "Farmers-Market", layout:{'visibility':'none', "text-field": "{Name}"}}},
                    {source: {type: "vector", url: "mapbox://turds.Historical-Landmarks"}, layer: {id: "Landmarks-label", source:"Historical-Landmarks", type: "symbol", 'source-layer': "Historical-Landmarks", layout:{'visibility':'none', "text-field": "{Name}"}}},
                    {source: {type: "vector", url: "mapbox://turds.EPA-Brownfield-Sites"}, layer: {id: "EPA-label", source:"EPA-Brownfield-Sites", type: "symbol", 'source-layer': "EPA-Brownfield-Sites", layout:{'visibility':'none', "text-field": "{Name}"}}},
                    ];

//basemap
map.on('style.load', function() {
    for (var i = 0; i < customLayers.length; i ++) {
        var me = customLayers[i];
        me.layer.layout.visibility = vis_status[me.layer.id];
        map.addSource(me.layer.id, me.source);

        map.addLayer(me.layer);
    }
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

    map.setPaintProperty('Percent-Rural-Population', 'fill-color',{
      property:"% Rural Population 2016",
      // property:.[1],
      stops:[
            [0, '#fff7ec'],
            [10, '#fee8c8'],
            [20, '#fdd49e'],
            [25,'#fdbb84'],
            [30,'#fddbc7'],
            [50,'#fc8d59'],
            [70,'#ef6548'],
            [90,'#990000'],
            ]
          });

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

    map.setPaintProperty('Total-Population', 'fill-color',{
      property:"Population (total) 2016",
      // property:.[1],
      stops:[
            [0, '#fff7ec'],
            [2000, '#fee8c8'],
            [3000, '#fdd49e'],
            [4000,'#fdbb84'],
            [5000,'#fddbc7'],
            [6000,'#fc8d59'],
            [7000,'#ef6548'],
            [8000,'#990000'],
            ]
          });

    map.setPaintProperty('Percent-Urban-Population', 'fill-color',{
      property:"% Urban Population 2016",
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

    map.setPaintProperty('Retired-Population', 'fill-color',{
      property:"Population (retired) 2016",
      // property:.[1],
      stops:[
            [0, '#fff7ec'],
            [50, '#fee8c8'],
            [70, '#fdd49e'],
            [85,'#fdbb84'],
            [100,'#fddbc7'],
            [130,'#fc8d59'],
            [150,'#ef6548'],
            [170,'#990000'],
            ]
          });

    map.setPaintProperty('Median-Age', 'fill-color',{
      property:"Median Age 2016",
      // property:.[1],
      stops:[
            [20, '#fff7ec'],
            [25, '#fee8c8'],
            [30, '#fdd49e'],
            [35,'#fdbb84'],
            [40,'#fddbc7'],
            [45,'#fc8d59'],
            [50,'#ef6548'],
            [60,'#990000'],
            ]
          });

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
});


map.on('style.load', function() {
    for (var i = 0; i < customLabels.length; i ++) {
        var me = customLabels[i];
        me.layer.layout.visibility = label_status[me.layer.id];
        map.addSource(me.layer.id, me.source);

        map.addLayer(me.layer);
    }
});
