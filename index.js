var turf = require('turf');
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

var inputFile = './input/test.csv';


function parseLine(line) {
    var parsed = line.split(",")
    var fromName = parsed[0];
    var toName = parsed[3];
    var fromPoint = createTurfPoint(parsed[1], parsed[2]);
    var toPoint = createTurfPoint(parsed[4], parsed[5]);
    var distance = turf.distance(fromPoint, toPoint).toFixed(2);
    console.log(fromName, "-", toName, ": ", distance, "Km");
}

// function for creating turf point format
function createTurfPoint(lng, lat){
    return {
        "type": "Feature",
        "properties": "",
        "geometry": {
            "type": "Point",
            "coordinates": [parseFloat(lat), parseFloat(lng)]
        }
    }
}

// rowCount flag for skip header
var rowCount = 0;

var parser = parse({ delimiter: ':' }, function (err, data) {
    // async processing, read line by line for handling huge rows
    async.eachSeries(data, function (line, callback) {
        if (rowCount != 0) parseLine(line[0]);
        if (rowCount != 1) rowCount = 1;
        callback();
    })
})
fs.createReadStream(inputFile).pipe(parser);