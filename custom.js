// var info = L.control();
//
// info.onAdd = function (map) {
//   this._div = L.DomUtil.create('div', 'info');
//   this.update();
//   return this._div;
// };

// info.update = function (props) {
//   this._div.innerHTML =  (props ?
//     '<b>' + props.GEN + '<h4>Unemployment Rate, July 2015: </h4>' + props["Population (retired) 2012"] + ' %, <h4>Unemployment Rate, June 2015: </h4> ' + props.test5_percentJune + ' %'
//     : 'Hover over a state');
// };
//
// info.addTo(map);

function getColor(d) {
  return d > 10 ? '#b2182b' :
            d > 9 ? '#d6604d' :
            d > 8  ? '#f4a582' :
            d > 7  ? '#fddbc7' :
            d > 6  ? '#d1e5f0' :
            d > 5  ? '#92c5de' :
            d > 4   ? '#4393c3' :
            '#2166ac';
}


function style(feature) {
  return {
    weight: 2,
    opacity: 0.3,
    color: 'white',
    dashArray: '1',
    fillOpacity: 0.6,
    fillColor: getColor(feature.properties.)
  };
}

for (var i = 0, i < toggleableLayerIds.length; i++{
  var id = toggleableLayerIds[i];
  style(id)
}
