var names = ["Fred", "Wilma", "Pebbles"];
var upper = names.map(function(name) {
    return name.toUpperCase();
});
upper;

// Higher-order functions are nothing more than functions that take other functions as arguments or return functions as their result.
// define a method with logic
function buildString(n, callback) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += callback(i);
    }
    return result;
}

// build alphabet
var aIndex = "a".charCodeAt(0); // 97
var alphabet = buildString(26, function(i) {
    return String.fromCharCode(aIndex + i);
});
alphabet

//build numbers
var digits = buildString(10, function(i) { return i; });
digits; // "0123456789"
