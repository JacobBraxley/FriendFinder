const path = require("path");

const friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends.data);
    });

    app.post("/api/friends", function(req, res) {
        //Validate body first...
        let dataIsValid = (req.body.name != "" && req.body.photo != "" && req.body.scores); //Contains all the requirements.

        req.body.scores.forEach(element => {
            if(isNaN(element)) {
                dataIsValid = false;
            }
        });

        if(dataIsValid) {
            friends.find(req.body);
            friends.add(req.body);
            //Figure out appropriate response.
            res.send(friends.recommendation());
        } else {
            //Indicate that data was invalid.
            console.log("Data was invalid.")
        }
    });
};