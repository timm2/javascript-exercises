const reverseString = function(string) {
    let result = "";
    while (string.length > 0) {
        result += string.slice(-1);
        string = string.slice(0, -1);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
