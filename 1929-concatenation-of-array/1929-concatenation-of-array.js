/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // case 1
    return [...nums, ...nums];
    // case 2
    return nums.concat(nums);
};