const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0);

const myTotal = myNums.reduce( (acc, cuur) => acc + cuur, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Web developer",
        price: 5999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "Data Scientist",
        price: 9999
    },
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);

const cart = [
    {
        name: "Blinkit",
        profit: 50500
    },
    {
        name: "Zepto",
        profit: 58930
    },
    {
        name: "Instamart",
        profit: 66000
    },
    {
        name: "Flipkart",
        profit: 22100
    },
    {
        name: "Amazon",
        profit: 33990
    }
]
const cartTotal = cart.reduce((acc,currval) => {
    console.log(`acc: ${acc} and currval: ${currval.profit}`)
    return acc + currval.profit;
}, 0);
console.log(cartTotal);