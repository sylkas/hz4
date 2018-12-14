// .5
const request = require('request');

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject('user not found');
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
}

// Promise.all([getUser(2), getUser(3), getUser(5)])
//     .then(users => {
//         users.forEach(user => {
//             console.log(user.name);
//         })
//     })
//     .catch(error => console.error(error))
//     //.finally(() => console.log('pobieranie zakonczone'));

// // lub

const userIds = [2, 3, 5, 7, 8, 10];
const userPromises = userIds.map(id => getUser(id));

Promise.all(userPromises)
    .then(users => {
        users.forEach(user => {
            console.log(user.name);
        })
    })
    .catch(error => console.error(error))
    //.finally(() => console.log('pobieranie zakonczone'));