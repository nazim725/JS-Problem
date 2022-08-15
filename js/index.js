// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function ReturnPosition(nums) {
  for (let i = 0; i < nums.length; i++) {
    let firstNumber = nums[i]
    for (let j = 0; j < nums.length; j++) {
      let secondNumber = nums[j]

      if (firstNumber + secondNumber == 9) {
        console.log(firstNumber, secondNumber)
        return [i, j]
      }
    }
  }
}

const result = ReturnPosition([7, 11, 15, 2])
console.log(result)
