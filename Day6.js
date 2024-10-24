// create a palindrome (means if reading  reverse its should be same)
// make case-insensitive
//ignore puntuaction ,special characters  our string etc

function checkPalindrome(str) {
    //replace will check for all non words and replace the with empty
    const input = str.toLowerCase().replace(/\W/g, "");
    console.log(input)
    // here we use built-in reverse
    const reverseword = input.split('').reverse().join('');
    if (input === reverseword) {
        console.log("its a palindrome");
        return
    }
    console.log("not a palindrome")




}
checkPalindrome("Aman?am/a")
checkPalindrome("raceecara")
checkPalindrome("raceecar")
checkPalindrome("AmannamA")


// Method 2 without built in method
function isPalindrome(str) {
    let newstring = "";
    if (str.length === 0) {
        return "empty String"
    }
    let updatedString = (str.toLowerCase()).replace(/\W/g, "");
    const splitstr = updatedString.split("");
    // Since we have index numbers less than the length, we should start from length - 1
    for (let i = splitstr.length - 1; i >= 0; i--) {
        newstring += splitstr[i];
    }
    // here we are learning  how to send json response according to result so we an make practice of api responses
    let response = {
        isTrue: false,
        palindomeString: newstring,
        normalString: updatedString
    }
    if (newstring === updatedString) {
        response["isTrue"] = true
        return response;

    }
    return response;


}

console.log(isPalindrome("Aman?am/a"))
console.log(isPalindrome("raceecara"))
console.log(isPalindrome("raceecar"))
console.log(isPalindrome("AmannamA"))
