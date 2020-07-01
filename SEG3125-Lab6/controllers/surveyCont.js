// code borrowed from https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis

module.exports = function (app) {

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

    // when a user goes to localhost:3000/niceSurvey
    // serve a static html (the survey itself to fill in)
    app.get('/Lab6', function (req, res) {
        res.sendFile(__dirname + '/views/Lab6.html');
    });

    app.post("/sResults", function (req, res) {
        console.log(req.body);
        var json = req.body;
        for (var key in json) {
            console.log(key + ": " + json[key]);
            // in the case of checkboxes, the user might check more than one
            if ((key === "color") && (json[key].length === 2)) {
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