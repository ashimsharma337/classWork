/*******************************************  loop for Array    **************************************/

// let allProduct = [
//     {
//         title: "iPhone12",
//         price: 100000,
//         discount: 10

//     },
//     {
//         title: "iPhone13",
//         price: 175000,
//         discount: 0

//     },
//     {
//         title: "Mac Book Air",
//         price: 340000,
//         discount: 2

//     },
//     {
//         title: "Acer Aspire",
//         price: 155000,
//         discount: 5

//     },

// ];

//while loop
//first initialization
// let i = 0;
// while(i < allProduct.length){
//     const priceAfterDiscount = allProduct[i].price-allProduct[i].price*allProduct[i].discount/100;
//     console.log(allProduct[i].title + " " + ":NPR." + priceAfterDiscount); 
//        i++;//if i++ is not present infinite loop will occur
//}



//iphone 12: Npr 90000
// const priceAfterDiscount0 = allProduct[0].price-allProduct[0].price*allProduct[0].discount/100;
// console.log(allProduct[0].title + " " + ":NPR." + priceAfterDiscount0); //90000

//iphone 13: 175000
// const priceAfterDiscount1 = allProduct[1].price-allProduct[1].price*allProduct[1].discount/100;
// console.log(allProduct[1].title + " " + ":NPR." + priceAfterDiscount1); //175000



/**************************************************   loop for object   *****************************/



// let allProduct = [
//     {
//     phone: [
//                 {
//                     title: "iPhone12",
//                     price: 100000,
//                     discount: 10

//                 },
//                 {
//                     title: "iPhone13",
//                     price: 175000,
//                     discount: 0

//                 }
//            ]
    
//   ,
    
//     laptop: [
        
//                 {
//                     title: "Mac Book Air",
//                     price: 340000,
//                     discount: 2

//                 },
//                 {
//                     title: "Acer Aspire",
//                     price: 155000,
//                     discount: 5

//                 },
//             ]
//         }
    
// ];

 //console.log("Product" , allProduct);



 //while loop
 //first initialization
// let i = 0;
// while(i < allProduct.length){

//     let elem = allProduct[i];
//     console.log("Element: ", elem);

//     const priceAfterDiscount = allProduct[i].price-allProduct[i].price*allProduct[i].discount/100;
//     console.log(allProduct[i].title + " " + ":NPR." + priceAfterDiscount); 
//        i++;//if i++ is not present infinite loop will occur
// }



//iphone 12: Npr 90000
// const priceAfterDiscount0 = allProduct[0].price-allProduct[0].price*allProduct[0].discount/100;
// console.log(allProduct[0].title + " " + ":NPR." + priceAfterDiscount0); //90000

//iphone 13: 175000
// const priceAfterDiscount1 = allProduct[1].price-allProduct[1].price*allProduct[1].discount/100;
// console.log(allProduct[1].title + " " + ":NPR." + priceAfterDiscount1); //175000


///For in loop and for of loop for Array

// let firstElement = [
//     "a",
//     "b",
//     "c"
// ];


//For in structure
// for (let a in firstElement) {
//     console.log(a);//prints index number of elements
// }
//For of structure
// for (let a of firstElement) {
//     console.log(a);//prints value
//}

///For in loop and for of loop for objects
// let firstElement = {
//     first: "a",
//     second: "b",
//     third: "c"
// };

// for (let a in firstElement) {
//     console.log(a);//gives key
// }

// for (let a of firstElement) {
//     console.log(a);//gives error says firstElement is not iterable//each loop, map, filter, reduce can be used
                  //To make the firstElement object iterable (and thus let for..of work) we need to add a method to 
                   //the object named Symbol.iterator (a special built-in symbol just for that).
// }