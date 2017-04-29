
var customLayers = [
                    //census layers
                    {source: {type: "vector", url: 'mapbox://turds.Work-at-Home-Population'}, layer: {id: "Work-at-Home-Population", source: "Work-at-Home-Population",'source-layer': "Work-at-Home-Population", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#3a3035', 'fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Median-Age'}, layer: {id: "Median-Age",source:"Median-Age",'source-layer': "Median-Age", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Retired-Population'}, layer: {id: "Retired-Population",source:"Retired-Population",'source-layer': "Retired-Population", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#b2182b','fill-outline-color':'#000000','fill-opacity':.7}}},
                    {source: {type: "vector", url: 'mapbox://turds.Percent-Urban-Population'}, layer: {id: "Percent-Urban-Population",source:"Percent-Urban-Population",'source-layer': "Percent-Urban-Population", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Total-Population'}, layer: {id: "Total-Population",source:"Total-Population",'source-layer': "Total-Population", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Recent-Movers'}, layer: {id: "Recent-Movers",source:"Recent-Movers",'source-layer': "Recent-Movers", type: "fill", 'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Percent-Rural-Population'}, layer: {id: "Percent-Rural-Population",source:"Percent-Rural-Population",'source-layer': "Percent-Rural-Population", type: "fill", 'layout': {'visibility': 'none'},paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Longtime-Residents'}, layer: {id: "Longtime-Residents",source:"Longtime-Residents",'source-layer': "Longtime-Residents", type: "fill",'layout': {'visibility': 'none'}, paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    //enviro layers
                    {source: {type: "vector", url: "mapbox://turds.US-Census-Urban-Areas"}, layer: {id: "US-Census-Urban-Areas", source: "US-Census-Urban-Areas", type: "fill", 'source-layer': "US-Census-Urban-Areas", 'layout': {'visibility': 'none'}, paint: {'fill-color': 'rgba(128, 128, 128, 0.4)', 'fill-outline-color': 'rgba(128, 128, 128, 1)'}}},
                    {source: {type: "vector", url: "mapbox://turds.ETQG-Region"}, layer: {id: "ETQG-Region", source: "ETQG-Region", type: "fill", 'source-layer': "ETQG-Region", 'layout': {'visibility': 'none'}, paint: {'fill-color': 'rgba(16,130,33,0)', 'fill-outline-color': '#131413'}}},
                    {source: {type: "vector", url: "mapbox://turds.Transnational-Companies"}, layer: {id: "Transnational-Companies", source: "Transnational-Companies", type: "circle", 'source-layer': "Transnational-Companies", 'layout': {'visibility': 'none'}, paint: {'circle-radius': 8, 'circle-color': 'rgba(237,226,16,1)', "circle-stroke-width": 2, "circle-stroke-color": '#000'}}},
                    {source: {type: "vector", url: "mapbox://turds.Farmers-Market"}, layer: {id: "Farmers-Market", source: "Farmers-Market", type: "circle", 'source-layer': "Farmers-Market", 'layout': {'visibility': 'none'}, paint: {'circle-radius': 8, 'circle-color': '#4245f4', "circle-stroke-width": 2, "circle-stroke-color": '#000'}}},
                    {source: {type: "vector", url: "mapbox://turds.Historical-Landmarks"}, layer: {id: "Historical-Landmarks", source: "Historical-Landmarks", type: "circle", 'source-layer': "Historical-Landmarks", 'layout': {'visibility': 'none'}, paint: {'circle-radius': 8, 'circle-color': 'rgba(226,22,11,1)', "circle-stroke-width": 2, "circle-stroke-color": '#000'}}},
                    {source: {type: "vector", url: "mapbox://turds.EPA-Brownfield-Sites"}, layer: {id: "EPA-Brownfield-Sites", source: "EPA-Brownfield-Sites", type: "circle", 'source-layer': "EPA-Brownfield-Sites",'layout': {'visibility': 'none'}, paint: {'circle-radius': 8, 'circle-color': 'rgba(139,69,19,1)', "circle-stroke-width": 2, "circle-stroke-color": '#000'}}},
                    {source: {type: "vector", url: "mapbox://turds.Parks"}, layer: {id: "Parks", source: "Parks", type: "fill", 'source-layer': "Parks", 'layout': {'visibility': 'none'}, paint: {'fill-color': 'rgba(16,130,33,0.8)', 'fill-outline-color': 'rgba(16,130,33,1)'}}}
                  ];

//basemap
map.on('style.load', function() {
    for (var i = 0; i < customLayers.length; i ++) {
        var me = customLayers[i];
        me.layer.layout.visibility = vis_status[me.layer.id];
        map.addSource(me.layer.id, me.source);
        
        map.addLayer(me.layer);
    }
});

