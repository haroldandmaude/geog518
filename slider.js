var years = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016'
];

function filterBy(year) {

    var filters = ['==', 'month', month];
    map.setFilter('earthquake-circles', filters);
    map.setFilter('earthquake-labels', filters);

    // Set the label to the month
    document.getElementById('month').textContent = months[month];
}

map.setFilter('Longtime-Residents', ['==', 'name', 'USA']);
