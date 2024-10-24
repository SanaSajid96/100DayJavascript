/* check if both 3 sides ae equal length then equileteral 
if 2 sides then isolences
if no match then scalene */

function checkShape(a, b, c) {
    if (a === b && b === c) {
        return "equileteral";
    }
    if (a === b || b === c || a === c) {
        return "isolences";
    }
    return "scalene"
}

console.log(checkShape(3, 1, 8));
