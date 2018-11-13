
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
            //loop through each 
        // friendsData.forEach(myFunction);

        // function myFunction (item, index) {
        
        //   for( var key in item ) {
              
            // console.log(key[item])
            // for(var i=0; i<friendsData.length;i++) {
            //     var scoresarray = friendsData[i].scores;
                // console.log(friendsData[i].scores);
                    
                // for(var j=0; j<scoresarray[j].length; j++) {
                //     var A = friendsData[0].scores;
                //     console.log("var a: " + A)
                //     var B = friendsData[1].scores;
                //     console.log("var b: " + B)
                //     var C = A.map(function (v, i) { return Math.abs(v - B[i]); });
                //     console.log("var c: " + C)
                    // console.log('<pre>' + JSON.stringify(c, 0, 4) + '</pre>');
                    // var totalDifference = C.reduce(add,0);
                    // function add(a, b) {
                    //     return a + b;
                    // }
                    // console.log("total difference: " + totalDifference);
                    // if(totalDifference< 20) {
                        
//     modal.append(
//         $("<h1>").text("Best Match"),
//         $("<hr>"),
//         $("<h2>").text("Name: " + friendsData[i].name),
//         $("<h2>").text(friendsData[i].photo),
//     )               
// }
                    
                    
                // }
            // }
                
        //   }
        // }
        
            // res.json(friendsData);
          
        
      });
    
      // ---------------------------------------------------------------------------
      // I added this below code so you could clear out the table while working with the functionality.
      // Don"t worry about it!
    
    //   app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
    //     friendsData.length = [];
       
    
    //     res.json({ ok: true });
    //   });
    };