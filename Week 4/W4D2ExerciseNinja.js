
//Excercise 1 : Random Number

function generateRandomInteger(){
    let ranMaxNum = Math.floor(Math.random() * 100);
    console.log("random max number is: " + ranMaxNum)
    for (let i=1; i<=ranMaxNum; i++){
        if ( i % 2 === 0) {
            console.log(i + " is an even number")
        }
    }
}
generateRandomInteger()
