//Make a sorted Array witout sort function

function generateSortArray(input) {
    let temp;
    // while working with anythings that need compare with item in array with eachother use 2 loops
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] > input[j + 1]) {
                temp = input[j];
                input[j] = input[j + 1]
                input[j + 1] = temp
            }
        }
    }
    return input
}

console.log(generateSortArray([3, 1, 10, 7, 15, 15, 4]));


// Method 2 we make it more efficient by comparing inner loop with next values as previously is already sorted
function makeSortedArray(myArray) {

    // this num will give you values stored at that index so here don't use this
    //for (const num of myArray)
    // The outer loop iterates through each element in the array

    for (let num = 0; num < myArray.length; num++) {

        // This inner loop compares the current element with all subsequent elements to ensure it's in the correct sorted position.
        // Initialize j to num + 1 to compare the current element with the next elements in the array, ensuring previously checked elements are already sorted.
        for (let j = num + 1; j < myArray.length; j++) {

            if (myArray[num] > myArray[j]) {
                const saveCurrentNo = myArray[num]
                myArray[num] = myArray[j]
                myArray[j] = saveCurrentNo;

            }

        }

    }
    return myArray
}
console.log(makeSortedArray([3, 1, 10, 7, 15, 15, 4]));
