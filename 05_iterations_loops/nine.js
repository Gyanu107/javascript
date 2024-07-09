const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js caurse",
        price: 2899
    },
    {
        itemName: "python caurse",
        price: 2899
    },
    {
        itemName: "data science caurse",
        price: 12899
    },
    {
        itemName: "mobile dev caurse",
        price: 5999
    },
]

const priceRupay = shoppingCard.reduce( (acc, item) => acc + item.price, 0)

console.log(priceRupay);