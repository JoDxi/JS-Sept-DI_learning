//Excercise 1 : Information
// Part 1
function infoAboutMe() {
    console.log("My name is Shachaf, im 25 year old and i enjoy SCUBA diving")
}

// infoAboutMe()

// Part 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("My name is " + personName + " I am " + personAge + " Years old" + " and my favorite color is " + personFavoriteColor)
}

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// Exercise 2 : Tips
function calculateTip() {
    var billAmount = parseInt(prompt("How much is the bill? "))
    var tipAmount
    var totalBill
    if (billAmount < 50) {
        tipAmount = billAmount * 0.2
    } else if (billAmount >= 50 && billAmount <= 200) {
        tipAmount = billAmount * 0.15
    } else if (billAmount > 200) {
        tipAmount = billAmount * 0.1
    } else {
        console.log("Invalid Bill Amount")
    }
    totalBill = billAmount + tipAmount
    console.log("For this bill the tip comes up to " + tipAmount + " the final bill comes up to " + totalBill)
}

// calculateTip()


// Exercise 3 - Find the numbers Divisible by 23
function isDivisible(divisor) {
    var sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i)
            sum += i
        }
    }
    console.log("Sum: " + sum)
}

isDivisible(23)


// Exercise 4 - Shopping List

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

var shoppingList = ["banana", "orange", "apple"]

function myBill() {
    var totalPrice = 0;
    for (let product in shoppingList) {
        if (shoppingList[product] in stock && stock[shoppingList[product]] > 0) {
            totalPrice += prices[shoppingList[product]]
            stock[shoppingList[product]] -= 1;
        }
    }
    return totalPrice
}

// result = myBill()
// console.log(result)
// console.log(stock)


// Exercise 5 : What's in my Wallet ?


function changeEnough(itemPrice, amountOfChange) {
    let pocketMoney = 0;
    pocketMoney += amountOfChange[0] * 0.25
    pocketMoney += amountOfChange[1] * 0.10
    pocketMoney += amountOfChange[2] * 0.05
    pocketMoney += amountOfChange[3] * 0.01
    return pocketMoney >= itemPrice;

}

// let canBuy = changeEnough(4.25, [25, 20, 5, 0])
// console.log(canBuy)


// Exercise 6 : Vacation Cats
// isNan - to check if prompt is number or not, if not ask again in loop
// part 2 airplane ride - use dictionary to determine price based on location
// check if drestination in dictionary (using in operator) if not price is 300

function hotelCost() {
    let nightsCost = 0;
    let numberNights = parseInt(prompt("How many nights would you like to say for? "))
    if (!isNaN(numberNights)) {
        nightsCost = numberNights * 140
        console.log("The cost of stay for " + numberNights + " nights is " + nightsCost)
        return nightsCost
    } else {
        console.log("Input is not a number")
        hotelCost()
    }
}

// hotelCost()

const destinations = {
    "london": 183,
    "paris": 220,
}

function planeRideCost() {
    let defaultPrice = 300;  // stored in variable for easy change in future
    let userDestination = prompt("Please choose your destination ")
    if (destinations[userDestination]) {
        console.log(destinations[userDestination])
        return destinations[userDestination]
    } else {
        console.log("The price for chosen the destination is - " + defaultPrice)
        return defaultPrice;
    }
}
// planeRideCost()


function rentalCarCost() {
    let totalCarCost = 0;
    let daysRented = parseInt(prompt("How many days would you like to rent for? "))
    if (!isNaN(daysRented) && daysRented > 10) {
        totalCarCost = daysRented * (40 * 0.95)
    } else if (!isNaN(daysRented)) {
        totalCarCost = daysRented * 40
    } else {
        console.log("Invalid input!")
        rentalCarCost()
    }
    console.log("The cost to rent the car for " + daysRented + " days will be " + totalCarCost)
    return totalCarCost
}
// rentalCarCost()


function totalVacationCost() {
    console.log("The total vacation cost break down is - Hotel (" + hotelCost() + "), Plane ride - (" + planeRideCost() + "), Car rental - (" + rentalCarCost())
}
// totalVacationCost()
