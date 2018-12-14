// .10

const axios = require('axios');
const util = require('util');
const fs = require('fs');

const writeFilePromise = util.promisify(fs.writeFile);

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url)
        .then(response => response.data);
}

function getUserAlbum(id){
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
    return axios(url)
        .then(response => response.data);
};
function getUserPhotos(id){
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
    return axios(url)
        .then(response => response.data);
};


getUser(2)
    .then(user => {
        console.log(user.name);
        return getUserAlbum(user.id);
    })
    .then(albums => {
        const [firstAlbum] = albums;
        console.log(albums.length);
        console.log(firstAlbum.title);
        return getUserPhotos(firstAlbum.id);
    })
    .then(photos => {
        console.log(photos.length);
        photos.forEach(photo => {
            console.log(photo.title);     
        });
        return photos;       
    })
    .then(photos => {
         const photosToWrite = JSON.stringify(photos);
         writeFilePromise('photos.json', photosToWrite);
    })
    .catch(error => console.log(error));
