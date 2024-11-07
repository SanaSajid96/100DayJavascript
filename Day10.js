// create 2 arrays that are equal in have  same element on same index

//way 1

function compareArray(array1, array2) {
    // to pass all condition we can use that will check our condition if all condition met return true else false
    return array1.every((value, index) => {
        return value === array2[index];
    })

}


console.log(checkArray([5, 8, 9], [5, 8, 9]));
console.log(checkArray([5, 8, 9], [5, 1, 9]));