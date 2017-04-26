// // Layers.js contains all the custom layers used by ETQG
// // to visualize population derived from simply map
//
// map.on('load', function() {
// // Longtime-Residents
// map.addLayer({
//     "id": "Longtime-Residents",
//     "type": "fill",
//     "source": {
//         type: 'vector',
//         url: 'mapbox://turds.Longtime-Residents'
//     },
//     "source-layer": "Longtime-Residents",
//     "paint": {
//       "fill-color":'#fff000',
//       'fill-outline-color':'#000000',
//       'fill-opacity':.5
//     }
//   });
// // Percent-Rural-Population
// map.addLayer({
//     "id": "Percent-Rural-Population",
//     "type": "fill",
//     "source": {
//         type: 'vector',
//         url: 'mapbox://turds.Percent-Rural-Population'
//     },
//     "source-layer": "Percent-Rural-Population",
//     "paint": {
//       "fill-color":'#75326a',
//       'fill-outline-color':'#000000',
//       'fill-opacity':.5
//     }
//   });
//
// // Recent-Movers
// map.addLayer({
//     "id": "Recent-Movers",
//     "type": "fill",
//     "source": {
//         type: 'vector',
//         url: 'mapbox://turds.Recent-Movers'
//     },
//     "source-layer": "Recent-Movers",
//     "paint": {
//       "fill-color":'#49525b',
//       'fill-outline-color':'#000000',
//       'fill-opacity':.5
//     }
//   });
//
// // Total-Population
// map.addLayer({
//     "id": "Total-Population",
//     "type": "fill",
//     "source": {
//         type: 'vector',
//         url: 'mapbox://turds.Total-Population'
//     },
//     "source-layer": "Total-Population",
//     "paint": {
//       "fill-color":'#000102',
//       'fill-outline-color':'#000000',
//       'fill-opacity':.5
//     }
//   });
//
// // Percent-Urban-Population
// map.addLayer({
//     "id": "Percent-Urban-Population",
//     "type": "fill",
//     "source": {
//         type: 'vector',
//         url: 'mapbox://turds.Percent-Urban-Population'
//     },
//     "source-layer": "Percent-Urban-Population",
//     "paint": {
//       "fill-color":'#46593d',
//       'fill-outline-color':'#000000',
//       'fill-opacity':.5
//     }
//   });
//
// // Retired-Population
// map.addLayer({
//     "id": "Retired-Population",
//     "type": "fill",
//     "source": {
//         type: 'vector',
//         url: 'mapbox://turds.Retired-Population'
//     },
//     "source-layer": "Retired-Population",
//     "paint": {
//       "fill-color":'#210412',
//       'fill-outline-color':'#000000',
//       'fill-opacity':.5
//     }
//   });
//
// // Median-Age
// map.addLayer({
//     "id": "Median-Age",
//     "type": "fill",
//     "source": {
//         type: 'vector',
//         url: 'mapbox://turds.Median-Age'
//     },
//     "source-layer": "Median-Age",
//     "paint": {
//       "fill-color":'#e2d9de',
//       'fill-outline-color':'#000000',
//       'fill-opacity':.5
//     }
//   });
//
// // Work-at-Home-Population
// map.addLayer({
//     "id": "Work-at-Home-Population",
//     "type": "fill",
//     "source": {
//         type: 'vector',
//         url: 'mapbox://turds.Work-at-Home-Population'
//     },
//     "source-layer": "Work-at-Home-Population",
//     "paint": {
//       "fill-color":'#3a3035',
//       'fill-outline-color':'#000000',
//       'fill-opacity':.5
//     }
//   });
//
// });

var customLayers = [
                    //kyle layers
                    // {source: {type: "vector", url: "mapbox://turds.ETQG-Region"}, layer: {id: "ETQG-Region", source: "ETQG-Region", type: "fill", 'source-layer': "ETQG-Region", paint: {'fill-color': 'rgba(16,130,33,0)', 'fill-outline-color': '#131413'}}},
                    {source: {type: "vector", url: 'mapbox://turds.Work-at-Home-Population'}, layer: {id: "Work-at-Home-Population", source: "Work-at-Home-Population",'source-layer': "Work-at-Home-Population", type: "fill", paint: {"fill-color":'#3a3035', 'fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Median-Age'}, layer: {id: "Median-Age",source:"Median-Age",'source-layer': "Median-Age", type: "fill" ,paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Retired-Population'}, layer: {id: "Retired-Population",source:"Retired-Population",'source-layer': "Retired-Population", type: "fill" ,paint: {"fill-color":'#b2182b','fill-outline-color':'#000000','fill-opacity':.7}}},
                    {source: {type: "vector", url: 'mapbox://turds.Percent-Urban-Population'}, layer: {id: "Percent-Urban-Population",source:"Percent-Urban-Population",'source-layer': "Percent-Urban-Population", type: "fill" ,paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Total-Population'}, layer: {id: "Total-Population",source:"Total-Population",'source-layer': "Total-Population", type: "fill" ,paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Recent-Movers'}, layer: {id: "Recent-Movers",source:"Recent-Movers",'source-layer': "Recent-Movers", type: "fill" ,paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Percent-Rural-Population'}, layer: {id: "Percent-Rural-Population",source:"Percent-Rural-Population",'source-layer': "Percent-Rural-Population", type: "fill" ,paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    {source: {type: "vector", url: 'mapbox://turds.Longtime-Residents'}, layer: {id: "Longtime-Residents",source:"Longtime-Residents",'source-layer': "Longtime-Residents", type: "fill" ,paint: {"fill-color":'#e2d9de','fill-outline-color':'#000000','fill-opacity':.5}}},
                    // jake layers
                    {source: {type: "vector", url: "mapbox://turds.US-Census-Urban-Areas"}, layer: {id: "US-Census-Urban-Areas", source: "US-Census-Urban-Areas", type: "fill", 'source-layer': "US-Census-Urban-Areas", paint: {'fill-color': 'rgba(128, 128, 128, 0.4)', 'fill-outline-color': 'rgba(128, 128, 128, 1)'}}},
                    {source: {type: "vector", url: "mapbox://turds.ETQG-Region"}, layer: {id: "ETQG-Region", source: "ETQG-Region", type: "fill", 'source-layer': "ETQG-Region", paint: {'fill-color': 'rgba(16,130,33,0)', 'fill-outline-color': '#131413'}}},
                    {source: {type: "vector", url: "mapbox://turds.Farmers-Market"}, layer: {id: "Farmers-Market", source: "Farmers-Market", type: "circle", 'source-layer': "Farmers-Market", paint: {'circle-radius': 8, 'circle-color': '#4245f4'}}},
                    {source: {type: "vector", url: "mapbox://turds.Historical-Landmarks"}, layer: {id: "Historical-Landmarks", source: "Historical-Landmarks", type: "circle", 'source-layer': "Historical-Landmarks", paint: {'circle-radius': 8, 'circle-color': 'rgba(226,22,11,1)'}}},
                    {source: {type: "vector", url: "mapbox://turds.Transnational-Companies"}, layer: {id: "Transnational-Companies", source: "Transnational-Companies", type: "circle", 'source-layer': "Transnational-Companies", paint: {'circle-radius': 8, 'circle-color': 'rgba(237,226,16,1)'}}},
                    {source: {type: "vector", url: "mapbox://turds.EPA-Brownfield-Sites"}, layer: {id: "EPA-Brownfield-Sites", source: "EPA-Brownfield-Sites", type: "circle", 'source-layer': "EPA-Brownfield-Sites", paint: {'circle-radius': 8, 'circle-color': 'rgba(139,69,19,1)'}}},
                    {source: {type: "vector", url: "mapbox://turds.Parks"}, layer: {id: "Parks", source: "Parks", type: "fill", 'source-layer': "Parks", paint: {'fill-color': 'rgba(16,130,33,0.8)', 'fill-outline-color': 'rgba(16,130,33,1)'}}}

                  ]

// var toggleableLayerIds = [ 'Longtime-Residents',
//  'Percent-Rural-Population',
//  'Recent-Movers',
//   'Total-Population',
//   'Percent-Urban-Population',
//    'Retired-Population',
//   // 'Median-Age',
//     //'Work-at-Home-Population' ];

//basemap
map.on('style.load', function() {
    for (var i = 0; i < customLayers.length; i ++) {
        var me = customLayers[i]
        map.addSource(me.layer.id, me.source);
        map.addLayer(me.layer)
    }
});
