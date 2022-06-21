const Order = {
    id: "#p808",
    title: "pizza",
    price: "120 INR",
    printOrder:()=>{
        console.log(Order.id,Order.title,Order.price)
    },
    getPrice:()=>{
        console.log(Order.price)
    }
}

Order.printOrder()
const newOrder = Object.assign(Order,{})
newOrder.id = "202"
newOrder.title = "new pizza"
newOrder.price = "99 INR"
newOrder.printOrder()