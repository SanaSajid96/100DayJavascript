//find fact of a number

const findfac = (num) => {

    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1
    }
    return num * findfac(num - 1)

}

console.log(findfac(4));
console.log(findfac(5));