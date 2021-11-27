
let allProduct = [
    {
        title: "iPhone12",
        price: 100000,
        discount: 10

    },
    {
        title: "iPhone13",
        price: 175000,
        discount: 0

    },
    {
        title: "Mac Book Air",
        price: 340000,
        discount: 2

    },
    {
        title: "Acer Aspire",
        price: 155000,
        discount: 5

    },
    
];

//while loop
//first initialization
let i = 0;
while(i < allProduct.length){
    const priceAfterDiscount = allProduct[i].price-allProduct[i].price*allProduct[i].discount/100;
    console.log(allProduct[i].title + " " + ":NPR." + priceAfterDiscount); 
       i++;//if i++ is not present infinite loop will occur
}



//iphone 12: Npr 90000
// const priceAfterDiscount0 = allProduct[0].price-allProduct[0].price*allProduct[0].discount/100;
// console.log(allProduct[0].title + " " + ":NPR." + priceAfterDiscount0); //90000

//iphone 13: 175000
// const priceAfterDiscount1 = allProduct[1].price-allProduct[1].price*allProduct[1].discount/100;
// console.log(allProduct[1].title + " " + ":NPR." + priceAfterDiscount1); //175000
