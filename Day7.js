//write a function to calculate max in array

function MaxNumber(input) {
    return input.reduce((number, total) => {
        for (i = 0; i <= input.length; i++) {
            if (number > total) {
                total = number;
            }
        }
        return total

    }, 0)
}
//other way to convert arr into number then find  max

function findMax(input) {
    console.log(...input)
    // we use spread operator to spread it it numbers & and can  use number related buil-in methods
    const MaxNumber = Math.max(...input)
    return MaxNumber
}
console.log(MaxNumber([6, 8, 1, 4, 56]));
console.log(findMax([6, 8, 1, 4, 56]));


//Method 3 using reduce Method

function findMaxNum(numArr) {

    return numArr.reduce((max, num, i) => {
        if (max < num) {
            max = num;
        }
        return max;
    }, numArr[0])

}
console.log(findMaxNum([6, 8, 1, 4, 56, 94]));