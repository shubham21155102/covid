var data = [{
    values: [19, 26, 1000],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
}];

var layout = {
    height: 400,
    width: 500
};

Plotly.newPlot('myDiv', data, layout);