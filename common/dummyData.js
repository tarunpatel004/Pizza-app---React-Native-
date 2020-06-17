//This file contains all the data that is available in the app as we don't have any for it so
export default {
    pizzaSize: [{
        id: '1',
        size: 'Small',
        price: 8,
        maxIngredients: 5,
        selected: true,
        image: require("../assets/images/small_pizza.png")

    },
    {
        id: '2',
        size: 'Medium',
        price: 10,
        maxIngredients: 7,
        selected: false,
        image: require("../assets/images/mid_pizza.png")

    },
    {
        id: '3',
        size: 'Large',
        price: 12,
        maxIngredients: 9,
        selected: false,
        image: require("../assets/images/large_pizza.png")

    },],

    toppingList: [{
        id: '1',
        name: 'Pepperoni',
        selected: false, 
        image: require("../assets/images/pepperoni.png")

    },
    {
        id: '2',
        name: 'Mushrooms',
        selected: false, 
        image: require("../assets/images/mashroom.png")

    },
    {
        id: '3',
        name: 'Onions',
        selected: false, 
        image: require("../assets/images/onion.png")

    },
    {
        id: '4',
        name: 'Sausage',
        selected: false, 
        image: require("../assets/images/sausage.png")

    },
    {
        id: '5',
        name: 'Bacon',
        selected: false, 
        image: require("../assets/images/bacon.png")

    },
    {
        id: '6',
        name: 'Extra cheese',
        selected: false, 
        image: require("../assets/images/cheese.png")

    },
    {
        id: '7',
        name: 'Black olives',
        selected: false, 
        image: require("../assets/images/oil.png")

    },
    {
        id: '8',
        name: 'Green peppers',
        selected: false, 
        image: require("../assets/images/paprika.png")

    },
    {
        id: '9',
        name: 'Pineapple',
        selected: false, 
        image: require("../assets/images/pineapple.png")

    },
    {
        id: '10',
        name: 'Spinach',
        selected: false, 
        image: require("../assets/images/spinach.png")

    }],

    crustList: [{
        id: '1',
        type: 'Thin',
        price: 2,
        selected: true, 
        image: require("../assets/images/thin_crust.png")
    },
    {
        id: '2',
        type: 'Thick',
        price: 4,
        selected: false, 
        image: require("../assets/images/thik_crust.png")
    }],

}