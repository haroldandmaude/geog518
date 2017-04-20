// Layers.js contains all the custom layers used by ETQG
// to visualize population derived from simply map

map.on('load', function() {
// Longtime-Residents
map.addLayer({
    "id": "Longtime-Residents",
    "type": "fill",
    "source": {
        type: 'vector',
        url: 'mapbox://turds.Longtime-Residents'
    },
    "source-layer": "Longtime-Residents",
    "paint": {
      "fill-color":'#fff000',
      'fill-outline-color':'#000000',
      'fill-opacity':.5
    }
  });
// Percent-Rural-Population
map.addLayer({
    "id": "Percent-Rural-Population",
    "type": "fill",
    "source": {
        type: 'vector',
        url: 'mapbox://turds.Percent-Rural-Population'
    },
    "source-layer": "Percent-Rural-Population",
    "paint": {
      "fill-color":'#75326a',
      'fill-outline-color':'#000000',
      'fill-opacity':.5
    }
  });

// Recent-Movers
map.addLayer({
    "id": "Recent-Movers",
    "type": "fill",
    "source": {
        type: 'vector',
        url: 'mapbox://turds.Recent-Movers'
    },
    "source-layer": "Recent-Movers",
    "paint": {
      "fill-color":'#49525b',
      'fill-outline-color':'#000000',
      'fill-opacity':.5
    }
  });

// Total-Population
map.addLayer({
    "id": "Total-Population",
    "type": "fill",
    "source": {
        type: 'vector',
        url: 'mapbox://turds.Total-Population'
    },
    "source-layer": "Total-Population",
    "paint": {
      "fill-color":'#000102',
      'fill-outline-color':'#000000',
      'fill-opacity':.5
    }
  });

// Percent-Urban-Population
map.addLayer({
    "id": "Percent-Urban-Population",
    "type": "fill",
    "source": {
        type: 'vector',
        url: 'mapbox://turds.Percent-Urban-Population'
    },
    "source-layer": "Percent-Urban-Population",
    "paint": {
      "fill-color":'#46593d',
      'fill-outline-color':'#000000',
      'fill-opacity':.5
    }
  });

// Retired-Population
map.addLayer({
    "id": "Retired-Population",
    "type": "fill",
    "source": {
        type: 'vector',
        url: 'mapbox://turds.Retired-Population'
    },
    "source-layer": "Retired-Population",
    "paint": {
      "fill-color":'#210412',
      'fill-outline-color':'#000000',
      'fill-opacity':.5
    }
  });

// Median-Age
map.addLayer({
    "id": "Median-Age",
    "type": "fill",
    "source": {
        type: 'vector',
        url: 'mapbox://turds.Median-Age'
    },
    "source-layer": "Median-Age",
    "paint": {
      "fill-color":'#e2d9de',
      'fill-outline-color':'#000000',
      'fill-opacity':.5
    }
  });

// Work-at-Home-Population
map.addLayer({
    "id": "Work-at-Home-Population",
    "type": "fill",
    "source": {
        type: 'vector',
        url: 'mapbox://turds.Work-at-Home-Population'
    },
    "source-layer": "Work-at-Home-Population",
    "paint": {
      "fill-color":'#3a3035',
      'fill-outline-color':'#000000',
      'fill-opacity':.5
    }
  });

});
