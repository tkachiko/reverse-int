module.exports = function reverse(n) {
    if (n < 0) {
        let reversed = n.toString().split("").slice(1).reverse().join("");
        return reversed;
    } else return n.toString().split("").reverse().join("");
};