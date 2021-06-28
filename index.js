var twoSum = function(nums, target) {
    //parameters
    //nums: an array
    //target: integer
    //return an array of 2 integers from nums that
    //rep the indeces of of 2 integers from nums
    //that add up to the target
    let result = [];
  // console.log(nums.indexOf(target-nums[0]));
  // console.log(nums.lastIndexOf(target-nums[0]));
  for(let i=0; i<nums.length; i++){
    // console.log(nums.indexOf(target-nums[i]));
    // console.log(nums.lastIndexOf(target-nums[0]));
    if(nums.indexOf(target-nums[i])!==i &&nums.indexOf(target-nums[i])!==-1){
      result.push(i, nums.indexOf(target-nums[i]));
    }
  }
  return result.slice(0, 2).sort((a, b)=> a-b);
};


console.log(twoSum([2,7,11,15], 9), " should be [0, 1]");
console.log(twoSum([3,2,4], 6), " should be [1, 2]");
console.log(twoSum([3, 3], 6), " should be [0, 1]")

//[2,7,11,15]
//9-2===7
