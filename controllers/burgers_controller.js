const express = require("express");
const burgers = require("../models/burger")

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burgers.selectAll((data) => {
      const burgerData = {
        burgers: data
      };
      res.render("index", burgerData);
    });
  });

  router.post("/createburger", (req, res)=>{
      console.log("This is the request", req.body)
        burgers.insertOne(req.body.burgerName, (result) =>{
            console.log(result);
            res.redirect("/");
        })
    })

    router.put("/burgers/:id", (request, response) => {
      console.log(request.params.id)
        const condition ='id=' + request.params.id;
        burgers.updateOne(condition, (result) => {
            if (result.changedRows === 0) {
                return response.status(404).end();
            }
            response.status(200).end();
        });
    });



module.exports = router;