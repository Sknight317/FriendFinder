
// Variable to require the friends array (information gathered from the survey)
var friendsData = require("../data/friend");


//Routing
module.exports = function(app) {
    // API GET Requests
    // handles when users "visit" a page
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    // Submits data to the server after user submits the form
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        console.log(friendsData);
            res.json(true);  
      });
    
    
    //   app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     friendsData.length = [];
       
    
    //     res.json({ ok: true });
    //   });
    };