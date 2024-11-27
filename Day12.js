/* Create a return array with removing duplicate elements */

//without built-in method
function removeDuplicate(...array) {
    //create array 
    let arr2 = []
    for (let i = 0; i < array.length; i++) {
        //find element in error if foun contnue else push
        if (arr2.includes(array[i])) {
            continue;
        }
        arr2.push(array[i]);
    }

    return arr2
}
// method
function bultinRemove(...array) {
    // set will creatte array of distnct elements
    // const arr = new Set(array)
    const newArr = new Set(array)
    const distinctArray = [...newArr]
    // to remove set length we use spread operator

    return distinctArray

}



console.log(removeDuplicate(5, 9, 5, 7, 8, 1, 9, 1));
console.log(bultinRemove(5, 9, 5, 7, 8, 1, 9, 1));