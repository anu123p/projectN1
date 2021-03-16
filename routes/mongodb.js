var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

// /* GET home page. */
// router.get('/db', function(req, res, next) {
//     res.render('mongodb', {results:docs});
// });


//module.exports = router;
router.get('/',function(request,response){
    mongodb.MongoClient.connect('mongodb+srv://admin:CqPZBoP2NNPCYpiy@cluster0.nkbnc.mongodb.net/',function (err,client){
        if(err) throw err;
        qw

        var db = client.db("sample_users");
        //console.log("db connection" + db.toString());
        var Routes = db.collection("details");
        Routes.find().toArray(function (err,docs){
            if(err) throw err;
            //console.log("data" + docs.entries().toString());
            response.render('mongodb',{results:docs});
        });

        client.close(function (err){
            if(err) throw err;
        });

    });
});
module.exports = router;