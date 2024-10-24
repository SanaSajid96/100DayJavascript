/* write a function to create HASH CODE by  converting a string line into hashcode example
inputString="hello my name is akhbar" to #HELLO MY NAME IS AKHBAR"
*/

function createHash(inputString) {
  if (inputString.trim().length == 0 || inputString.trim().length > 280) {
    return false;
  }
  const words = inputString.split(" ");
  return words.reduce(
    (hash, currentword) => (hash += currentword.toUpperCase()),
    "#"
  );
}
console.log(createHash("hello my name is akhbar"));

/* write a function to create HASH CODE by  captalize firstletter of each word in string and add # in start 
inputString="hello my name is akhbar" to #HELLO MY NAME IS AKHBAR"
*/

/* with reduce */
function ReduceHashCode(inputString) {
  if (inputString.trim().length == 0 || inputString.trim().length > 280) {
    return false;
  }

  let words = inputString.split(" ");
  //reduce will  return resultant array
  return words.reduce(
    (hash, currentvalue) =>
    (hash +=
      currentvalue[0].toUpperCase() +
      currentvalue.slice(1, currentvalue.length)),
    "#"
  );
}
console.log(ReduceHashCode("hello my name is akhbar"));

/* with Map*/
function MapHashCode(inputString) {
  if (inputString.trim().length == 0 || inputString.trim().length > 280) {
    return false;
  }

  let words = inputString.split(" ");
  //reduce will  return resultant array
  let hashArray = words.map(
    (currentvalue) =>
      currentvalue[0].toUpperCase() + currentvalue.slice(1, currentvalue.length)
  );
  //to join array into string
  let finalhashword = `#${hashArray.join("")}`;
  return finalhashword;
}

// 1st Question 2nd Method
function createHahCode(String) {
  let wordArray = String.split(" ");

  if (wordArray.length === 0) {
    return "empty"
  }
  let upperCaseString = wordArray.map((word) => {

    return word.toUpperCase();

  })

  let hashCode = upperCaseString.join("");
  return `#${hashCode}`

}
console.log(createHahCode("hello my name is akhbar"));


// 2nd Question 2nd method
function captalizeFirstWordHash(String) {
  let StringArray = String.split(" ");
  let FinalString = StringArray.reduce((accumWord, word) => {
    let getchar = (word.charAt(0)).toUpperCase();
    let NewWord = `${getchar}${word.slice(1, word.length)}`
    return accumWord + NewWord;
  }, "#")
  return FinalString

}

console.log(captalizeFirstWordHash("hello my name is Ahmed"));