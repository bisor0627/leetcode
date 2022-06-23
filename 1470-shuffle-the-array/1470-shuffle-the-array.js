/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var x = nums.slice(0,n);
    var y = nums.slice(n,nums.lenght);
    nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(x[i]);
        nums.push(y[i]);
    }
    return nums;
};