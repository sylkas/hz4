// .4

 const request = require('request');
 function getUser(id){
     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
     return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if(error || (response && response.statusCode !== 200)) {
                reject('User not found')
            } else {
                resolve(JSON.parse(body));
            }
        });
     });
 }

 getUser(4)
    .then(user => console.log(user.name))
    .catch(error => console.log(error));