
// const first = new Promise((res, rej) => {
//     console.log("I am first Promise");
//     let x = true;
//     if(x){
//         res();
//     } else {
//         rej();
//     }
// });

// const second = new Promise((res, rej) => {
//     console.log("I am second Promise");
//     let x = true;
//     if(x){
//         res();
//     } else {
//         rej();
//     }
// });

// const third = new Promise((res, rej) => {
//     console.log("I am third Promise");
//     let x = true;
//     if(x){
//         res();
//     } else {
//         rej();
//     }
// });

// first
// .then(() => {
//     console.log("I am from first then.")
//     second.then(() => {
//         console.log("I am second then but within first then.")
//             third.then(() => {
//                 console.log("I am inside second then of the first then. but my value is third.")
//             })
//             .catch(() => {
//                 console.log("I am catch of third promise.")
//             })
//     })
//     .catch(() => {
//         console.log("I am catch of second promise.")
//     })
// })
// .catch(() => {
//     console.log("I am from first catch.")
// })

// when we see the results of above code after first promise, first then is not executed instead second promise is executed


function firstPromise(){
    return new Promise((resolve, reject) => {
        console.log("First Promise");
        let x = true;
        if(x){
            resolve("First resolve.");
        } else {
            reject("First reject");

        }
    });
}

function secondPromise(){
    return new Promise((res, rej) => {
        console.log("Second Promise");
        let y = true;
        if(y){
            res("Second Resolve");
        } else {
            rej("Second Reject");
        }
    });
}

function thirdPromise(){
    return new Promise((res, rej) => {
        console.log("third Promise");
        let y = false;
        if(y){
            res("third Resolve");
        } else {
            rej("third Reject");
        }
    });
}

firstPromise()
.then((succ) => {
    console.log("First Resolve Data >>>", succ);
    return secondPromise();
})
.then((succ) => {
    console.log("Second Result Data >>>", succ);
    return thirdPromise();
})
.then((succ) => {
    console.log("Third Result Data >>>", succ);
})
.catch((err) => {
    console.log("First Error Data >>>", err);
})

// The above code gives an example of promie chaining in which after first promise its then is excecuted




