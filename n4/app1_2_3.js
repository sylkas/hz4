// .1
// const myPromise = new Promise ((resolve, reject) => {
//     resolve('hello world');
// });
//  myPromise
//     .then(result => {
//      console.log(result)
//     });

// .2
// const myPromise = new Promise ((resolve, reject) => {
//     setTimeout (() => {resolve('Hello world')}, 5000)
    
// });


//  myPromise
//     .then(result => {
//      console.log(result)
//     });

// .3
// console.log('app.init')
// function sub(a, b) {
//    const result = a - b;
//    return new Promise((resolve, reject) => {
//        if (result < 0) {
//            reject('mniej niz 0');
//        }
//        resolve(result);
//    });
// }

// sub(2, 12)
//    .then(result => {
//        console.log('result', result)
//    })
//    .catch(error => {
//        console.log(error)
//        // return sub(2, 1);
//        // return Promise.reject('abc')
//        throw new Error('aaa')
//    })
//    .then(result => {
//        console.log('result2', result)
//    })
//    .catch(
//        err => console.log(err)
//     )

//  console.log('app.end')
