/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var list = address.split('');
    var str = '';
     for (let index = 0; index < list.length; index++) {
        list[index] == '.' ? str += '[.]' : str += list[index];
    }
    return str;
};