/* write a function that counts character in a string its shouldreturn no of apperances of that character 
/* handle both lowecaser and uppercase*/
/* should be case-sensitive */

function countChar(inputString, character) {

    let searchword = inputString.toLowerCase().split('');
    let characterword = character.toLowerCase();

    return searchword.reduce((total, currentvalue) =>
        currentvalue === characterword ? total + 1 : total
        , 0)
}
console.log(`Total Number of character repetition : ${countChar("Sana is a nice girl She is a good Developer SSSSs", "s")}`)



function countCharInString(String, findChar) {

    if (String.length === 0) {
        return "empty String";

    }
    // its imp that both string and search should be of same either or UpperCase else one case wouldn't count
    // This solution has an additional flaw: it splits the string into words and then into characters, instead of directly splitting into characters.
    let lowerCaseString = String.toLowerCase();
    let findCharlowerCase = findChar.toLowerCase()
    let stringToarray = lowerCaseString.split("");
    const totalOcuurence = stringToarray.reduce((total, word) => {

        for (const char of wordArray) {
            if (char === findCharlowerCase) {
                total += 1
            }
        }
        return total

    }, 0)
    return totalOcuurence;
}
console.log(`Total Number of character repetition : ${countCharInString("Sana is a nice girl She is a good Developer SSSSssS", "S")}`)
