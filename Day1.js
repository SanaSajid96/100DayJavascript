//Write a function to return longest string in a string without using sort method
function longeststring(inputString) {
    //to check if string only have spaces that return false
    if (inputString.trim().length == 0) {
        return false;
    }
    const words = inputString.split(" ");
    let longword = "";

    for (i = 0; i < words.length; i++) {
        if (words[i].length > longword.length) {
            longword = words[i];
        }
    }
    return longword;
}
// Now doing same task using reduce function
function longestwordwitReduce(inputString) {
    if (inputString.trim().length == 0) {
        return false;
    }
    const words = inputString.split(" ");

    return words.reduce(
        (accum, currentvalue) =>
            currentvalue.length > accum.length ? currentvalue : accum,
        ""
    );
}
console.log(longestwordwitReduce("this is my javascript program"));
console.log(longeststring("this is my javascript program "));

//Practice 1 3rd way

function FindLongestString(longeststring) {

    let NewString = longeststring.split(" ");
    let hightestValue = 0;
    let biggestString;
    for (i = 0; i < NewString.length; i++) {
        let count = 0;
        let word = NewString[i].split('');
        for (j = 0; j < word.length; j++) {
            count += 1

        }
        if (count > hightestValue) {
            hightestValue = count;
            biggestString = NewString[i]
        }
    }
    return biggestString
}
console.log(FindLongestString("this is my javascript program "));