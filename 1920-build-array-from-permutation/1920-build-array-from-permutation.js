/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var list = [];
    for (let index = 0; index < nums.length; index++) {
        list.push(nums[nums[index]]);
    }
    return list;
};