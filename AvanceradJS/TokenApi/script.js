const axios = require('axios');

axios.post('http://ec2-13-53-46-89.eu-north-1.compute.amazonaws.com:3000' + '/auth', { email: 'bob@example.com', password: 'bob123' })
.then((Response)=>{
    console.log(Response.data);

    let token = Response.data.token
    sendToken(token);
})

function sendToken(token) {
    axios.get('http://ec2-13-53-46-89.eu-north-1.compute.amazonaws.com:3000/me', {
        headers: {
        Authorization: 'Bearer ' + token,
        },
       })
       .then((response) => {
        console.log(response.data);
       });
}


    