/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var sum = 0;
    var list = [];
    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
        list.push(sum);
    }
    return list;
};