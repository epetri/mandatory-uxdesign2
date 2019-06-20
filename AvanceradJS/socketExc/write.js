var socket = require('socket.io-client')('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
socket.on('connect', function(){

});

socket.emit("message", {
    username: "P3",
    content: "thiz iz cray",
});
