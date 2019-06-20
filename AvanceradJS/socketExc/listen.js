var socket = require('socket.io-client')('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
socket.on('connect', function(){
    console.log('hej');
    
});


socket.on("new_message", function (message)  {
    console.log(message);
})

 