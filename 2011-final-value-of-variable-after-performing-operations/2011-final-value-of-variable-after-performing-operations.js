/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    // console.log(operations);
    var num = 0;
    for(let index = 0; index < operations.length; index++) {
        if (operations[index].includes('--')) {
            num --;
        }else {
            num ++;
        }
    }
    return num;
};