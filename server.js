/**
 * Created by Petzch on 20.10.2016.
 */

// Get express
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



var server = app.listen(PORT, function (){
    console.log('Express server is up on port ' + PORT);
});

var io = require('socket.io').listen(server);


io.sockets.on('connection', function(socket){

    socket.once('disconnet', function(){
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
    });

    connections.push(socket);
    console.log('Connected %s', socket.id);
})

