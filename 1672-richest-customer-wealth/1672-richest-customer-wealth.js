/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var user = [];
    // var sum = 0;
    accounts.forEach(element => {
        //case 1
        user.push(element.reduce((us, wl) => us += wl));
        
        //case 2
        // for (let index = 0; index < element.length; index++) {
        //     sum += element[index];
        // }
        // user.push(sum);
        // sum = 0; 
    });
    return Math.max.apply(null, user);
};