/**
 * Created by Petzch on 20.10.2016.
 */
var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

//Redirect https to http (considers also localhost
app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://' + req.hostname + req.url);
    }else{
        next();
    }
})

app.use(express.static('public'));

app.listen(PORT, function (){
    console.log('Express server is up on port ' + PORT);
});
