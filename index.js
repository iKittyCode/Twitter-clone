var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'mydata.db',
        autoload: true
    });
var express = require('express')
var app = express()

app.listen(8090, () => {
    console.log("Listening at port 8090")
})
app.use(express.static('client'))
app.use(express.json())
app.post('/api', function (request, reponse) {
    db.insert(request.body, function (err, doc) {
        console.log("Data sent");
    });
    console.log(request.body)
})
app.get('/api', function(request, response) {
    db.find({}, function (err, data) {
        if (err) {
            console.log("Error!!!!")
            return;
        }
        response.json(data)
    })


})