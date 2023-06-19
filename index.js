// Code your solution here
function findMatching(array, names) {
    return array.filter(item => item.toUpperCase() === names.toUpperCase());
}

function fuzzyMatch(array, names) {
    return array.filter(letters => letters.slice(0, 2) === names.slice(0, 2));
}

function matchName(array, string) {
    return array.filter(item => item.name === string);
}
