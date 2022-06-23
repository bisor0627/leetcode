/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    var num = 0;
    sentences.forEach(element => {
        var list = element.split(' ');
        if(num < list.length) {
            num = list.length;
        }
    });
    return num;
};