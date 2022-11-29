//Exercise 1 - Is_Blank

function blankCheck() {
    let checkString = prompt("How's life? ")
    if (checkString === "") {
        console.log("Blank")
    } else {
        console.log("Not blank")
    }
}
// blankCheck()

//Exercise 2 : Abbrev_name
function abbrevName(name) {
    var split_names = name.trim().split(" ");
    return (split_names[0] + " " + split_names[1].charAt(0) + ".")
}
// console.log(abbrevName("Dan Singer"))


//Exercise 3 : Swap Case

function swapCase(str) {
    let newLetters = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newLetters += str[i].toLowerCase();
        } else {
            newLetters += str[i].toUpperCase();
        }
    }
    // console.log(newLetters);
    return newLetters;
}
// console.log(swapCase('The Quick Brown Fox'));

//Exercise 4 : Omnipresent Value
//This function takes 2 paramaters, an array to check the condition in and the value (the condition to be checked). in this example, we give the array and a value of 1.
// Next we check if that value exists in every single array using the every() method. Used lambda function for ease of read.
const isOmnipresent = (arr, val) => arr.every(x => x.includes(val));
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))



