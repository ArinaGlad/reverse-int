module.exports = function reverse (n) {
    let res = '';
    for (let i = String(n).length - 1; i >= 0; i--) {
        if (String(n)[i] !== '-') {
            res = res + String(n)[i];
        }
        
    }
    return Number(res);
};
