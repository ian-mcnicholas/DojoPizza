function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
    }
    var deepDish = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
    var handTossed = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
    var gardenPizza = pizzaOven("baked", "white", "munster", "veggies");
    var NyStyle = pizzaOven("Ny Style", "marinara", "mozarella", ["Beef", "Garlic", "Red Onions", "Green Peppers"]);
    var pizzas = [deepDish, handTossed, gardenPizza, NyStyle];

    function randomPizza() {
    var newPizza = {};
    newPizza.crustType = pizzas[Math.floor((Math.random() * 4))].crustType;
    newPizza.sauceType = pizzas[Math.floor((Math.random() * 4))].sauceType;
    newPizza.cheese = pizzas[Math.floor((Math.random() * 4))].cheese;
    newPizza.toppings = pizzas[Math.floor((Math.random() * 4))].toppings;
    return newPizza;
    }
    console.log(randomPizza());