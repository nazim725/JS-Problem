// convert inch to feet
// function inchToFeet(feet) {
//   const inch = feet / 12
//   return inch
// }
// console.log(inchToFeet(12))
// ----------------------------------------------------

// miles to km
// function milesToKm(miles) {
//   const km = miles * 1.65
//   return km
// }

// console.log('km=', milesToKm(12).toFixed(3))

// ----------------------------------------------------

// check even and odd number
// const num = 14
// if (num % 2 == 0) {
//   console.log('number is even')
// } else if (num % 2 == 1) {
//   console.log('number is odd')
// } else {
//   console.log('number is No number')
// }

// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return 'Number is even'
//   }
//   if (number % 2 == 1) {
//     return 'Number is Odd'
//   }
// }

// const result = evenOrOdd(121)
// console.log(result)

// ----------------------------------------------------

// leap year

// function leapYear(year) {
//   if (year % 4 == 0) {
//     return `${year} is a Leap Year`
//   } else {
//     return `${year} is not a Leap Year`
//   }
// }

// const result2 = leapYear(2020)
// console.log(result2)

// ----------------------------------------------------

// factorial
// let factorial = 1
// for (let i = 1; i <= 7; i++) {
//   factorial = factorial * i
// }

// console.log(factorial)

// function Findfactorial(number) {
//   let factorial2 = 1
//   for (let i = 1; i <= number; i++) {
//     factorial2 = factorial2 * i
//   }

//   return factorial2
// }

// const facResult = Findfactorial(7)
// console.log(facResult)

// ----------------------------------------------------

// একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে

// for (let i = 1; i <= 100; i++) {
//   console.log(i)
// }

// ----------------------------------------------------

// ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।

// for (let i = 50; i <= 80; i++) {
//   if (i % 2 == 1)
//    console.log(i)
// }

// ----------------------------------------------------
// তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো

// function add(x, y, z) {
//   const addition = x + y + z
//   return addition
// }
// const resultadd = add(2, 3, 4)
// console.log(resultadd)

// ----------------------------------------------------

// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে
// function celToFaren(cel) {
//   const faren = (cel * 9) / 5 + 32
//   return faren
// }

// const farenHeight = celToFaren(20)
// console.log(farenHeight)

// ----------------------------------------------------

// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

// function farenToCel(faren) {
//   const cel = (5 * (faren - 32)) / 9
//   return cel
// }

// const celcius = farenToCel(20)
// console.log(celcius)

// ----------------------------------------------------

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

// function grad(number) {
//   if (number >= 40 && number <= 60) {
//     return 'A'
//   } else if (number >= 61 && number <= 80) {
//     return 'A+'
//   } else if (number >= 81 && number <= 100) {
//     return 'A++'
//   } else {
//     return 'F'
//   }
// }

// const gradResult = grad(86)
// console.log(gradResult)

// ----------------------------------------------------
// Shud ber kora
// function shud(principle, rate, year) {
//   const benifit = principle * (1 + rate * year)
//   return benifit
// }

// const shudResuylt = shud(100, 5, 1)
// console.log(shudResuylt)

// ----------------------------------------------------

// interChange // destructuring

// let first = 1
// let second = 2
// // console.log(first, second)
// // let temp = first
// // first = second
// // second = temp
// // console.log(first, second)

// [first,second]=[second,first]
// console.log(first, second)

// ----------------------------------------------------

// 3 number er modde biggest number ber Kora
// function findBiggest(first, second, third) {
//   const maxNumber = Math.max(first, second, third)
//   return maxNumber
// }

// const biggestNumber = findBiggest(23, 32, 34)
// console.log(biggestNumber)

// ----------------------------------------------------

// sum of all number of an array

// const numbers = [1, 2, 3]
// let sum = 0

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i]
//   sum = sum + element
//   console.log(element)
// }
// console.log(sum)

// function arrayTotal(numbers) {
//   let sum = 0

//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i]
//     sum = sum + element
//   }
//   return sum
// }

// const total = arrayTotal([1, 2, 3])
// console.log(total)

// ----------------------------------------------------

// find the largest number of an array

// function largentNumber(number) {
//   let num = number[0]
//   for (let i = 0; i < number.length; i++) {
//     const element = number[i]
//     if (element > num) {
//       num = element
//     }
//   }
//   return num
// }

// const largentNumberValue = largentNumber([904, 32, 12, 455, 0])
// console.log(largentNumberValue)

// ----------------------------------------------------

function totalSales(shirts, pants, shoes) {
  const shirtPrice = shirts * 100
  const pantPrice = pants * 200
  const shoesPrice = shoes * 300
  const totalPrice = shirtPrice + pantPrice + shoesPrice
  return totalPrice
}

const totatSalesPrice = totalSales(2, 3, 5)
// console.log(totatSalesPrice)

// ------------------------

// Problem Number  =>> perfect Friend Selection
// var friendsNames = [
//   'IrfanHabib',
//   'naim Uddin shah',
//   'sejin',
//   'Jannatul Mawa Sejin',
// ]

// function perfectFriend(array) {
//   let frinds = ''

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i]
//     if (element.length == 5) {
//       frinds = element
//     }
//   }

//   return frinds
// }

// const perfectFriendname = perfectFriend(friendsNames)
// console.log(perfectFriendname)

// -----------------------------------------------------------------
// kono sentence koita vowels ache check KeyboardEvent

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function getVowels(sentence) {
  const letters = Array.from(sentence)
  let newVowels = []
  for (let i = 0; i < letters.length; i++) {
    const element = letters[i]
    if (vowels.includes(element)) {
      newVowels.push(element)
    }
  }

  return newVowels
}

const result = getVowels('I Love Bangladesh')
console.log('vowels', result)
// -------------------------------------------------
// array theke duplicate number ber kora

// const numbers = [1, 2, 3, 4, 5, 2, 4, 5, 6]
// const newarray = numbers.filter(function (value, index, array) {
//   return array.indexOf(value) !== index
// })
// console.log(newarray)

// ----------------------------------------------------
// akta sentence e koibar nazim use kora hoyeche. 1st koi no position e sejin a

const sentence = ' I love Sejin Sejin is a beautiful girl'
const matching = sentence.match(/sejin/gi) //g mane sob ghula match check korbe,i mane case insensitive
const position = sentence.search(/sejin/i)
console.log(matching.length)
console.log(position)

function inchToFeet(inch) {
  const feet = inch / 12
  return feet
}

const r1 = inchToFeet(25)
console.log('Feet: ', r1)

function getNumber(number) {
  if (number >= 40 && number <= 60) {
    return ' A'
  } else if (number >= 61 && number <= 80) {
    return ' A+'
  } else {
    return ' F'
  }
}

const r2 = getNumber(75)
console.log(r2)

function arrayTotal(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    sum = sum + element
  }
  return sum
}
const r3 = arrayTotal([1, 2, 3])
console.log(r3)

function largestNumber(number) {
  let largest = 0
  for (let i = 0; i < number.length; i++) {
    const element = number[i]
    if (element > largest) {
      largest = element
    }
  }
  return largest
}
const r4 = largestNumber([1, 3, 5, 2])
console.log(r4)
