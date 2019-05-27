const path = require("path");

const friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {

        //Validate body first...
        let dataIsValid = (req.body.name != "" && req.body.photo != "" && req.body.scores); //Contains all the requirements.

        scores.forEach(element => {
            if(isNaN(element)) {
                dataIsValid = false;
            }
        });

        if(dataIsValid) {
            friendsData.push(req.body);
            //Figure out appropriate response.
        } else {
            //Indicate that data was invalid.
        }
    });
};