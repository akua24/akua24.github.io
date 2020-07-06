// code borrowed from https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis

// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');

function readData(fileName) {
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName) {
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

// update the data file, I use "name" to be equal to fruit, or animal or color
// to match with the file names
// I assume we always just add 1 to a single item
function combineCounts(name, value) {
    // console.log(value);
    info = readData(name);
    // will be useful for text entry, since the item typed in might not be in the list
    var found = 0;
    for (var i = 0; i < info.length; i++) {
        if (info[i][name] === value) {
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0) {
        info.push({ [name]: value, count: 1 });
    }
    writeData(info, name);
}

module.exports = function (app) {    

    app.get("/sResults", function (req, res) {
        var age = readData("age");
        var features = readData("features");
        var likedOrNot = readData("likedOrNot");
        var mostDisliked = readData("mostDisliked");
        var postCode = readData("postCode");
        var shopOften = readData("shopOften");
        var checkout = readData("checkout");

        res.render("sResults", { results: [age,checkout,features,likedOrNot,mostDisliked,postCode,shopOften] });
        console.log([age, checkout, features, likedOrNot, mostDisliked, postCode, shopOften]);
    });

    // when a user goes to localhost:3000/mySurvey
    // serve a static html (the survey itself to fill in)
    app.get('/Lab6', function (req, res) {
        res.sendFile(__dirname + '/views/Lab6.html');
    });

    app.post("/Lab6", urlencodedParser, function (req, res) {
        console.log(req.body);
        var json = req.body;
        for (var key in json) {
            console.log(key + ": " + json[key]);
            // in the case of checkboxes, the user might check more than one
            if ((key === "likedOrNot") && (json[key].length === 2)) {
                for (var item in json[key]) {
                    combineCounts(key, json[key][item]);
                }
            }
            else {
                combineCounts(key, json[key]);
            }
        }
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        res.sendFile(__dirname + "/views/Lab6.html");
    });

    app.delete("/sResults", function (req, res) {

    });

};