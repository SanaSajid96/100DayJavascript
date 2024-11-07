// write afunction to calculate sum of number

async function findTotalOFNum(Num) {

    let numarray = Num.toString().split('')
    console.log()
    return numarray.reduce((sum, value) => {
        //convert numbers to int with parseInt
        console.log("value", value)
        return sum = sum + parseInt(value)
    }, 0)


}
findTotalOFNum(8912).then((result) => {
    console.log(result)

});