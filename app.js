
// 1
// Array ichidagi faqat arraylarni elementlarini ajratib oling.
// Kutilyotgan natija: [1, 2, 3, 4, 5, 6]
// const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]
// const newData = []

// data.forEach((item) => {
//   const res = Array.isArray(item)
//   if (res) {
//     item.forEach((num) => {
//       newData.push(num)
//     })
//   }
// })

// console.log(newData)



// 2
// Array ichidagi
// [null, 0, "", false, undefined, NaN]
//qiymatlarini ajratib oladigan cod yozing.
// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsey = []

// checkData.forEach((item) => {
//   if (!item) {
//     falsey.push(item)
//   }
// })

// console.log(falsey)



// 3
//  Arraydagi Natural raqamlarni yig’indisini topadigan cod yozing.
// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// let naturalNumber = 0
// numbers.forEach((num) => {
//   if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//     naturalNumber += num
//   }
// })
// console.log(naturalNumber)



// 4
// Berilgan: [21.1, "Ikrom", "array", ["I am array"], null, true, 214]
// array berilgan Uni:
// Natija: ["number", "string", "string", "object", "object", "boolean", "number"]
// ko’rinishida qaytaring.

// const types = [21.1, 'Ikrom', 'array', ['I am array'], null, true, 214]

// const newTypes = []

// types.forEach((type) => {
//   newTypes.push(typeof type)
// })
// console.log(newTypes)



// 5
// Arrayning berilgan: [1, 2, 3, 4, 5] uning ichidagi elementlariga o’z index(position) raqamini qo’shib yangi array hosil qiling.
// Natija: [1, 3, 5, 7, 9] bo’lsin.

// const number = [1, 2, 3, 4, 5]

// let result = []

// number.forEach((num, i) => {
//   result.push(num + i)
// })

// console.log(result)



// 6
// Berilgan sonni n ga ko’paytirib 1 ni qo’shadigan cod yozing. Birinchi 10 ta holat qaytarilsin.
// n=2 misolidida:
/*
   7 - "8,15,22,29,36,43,50,57,64,71"
   1 - "2,3,4,5,6,7,8,9,10,11"
   3 - "4,7,10,13,16,19,22,25,28,31"
*/
// let number = 9

// for (let i = 1; i <= 10; i++) {
//   let reusult = number * i + 1
//   console.log(reusult)
// }



// 7
// functionga array kiritsak u array ichidagi raqamlarni teskari ishorasiga aylanitirib berisin.
// [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] => [-1, 2, -3, 4, -5]
// [] => []

// let numbers = [1, 2, 3, 4, 5]
// let result = []

// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     result.push(num * -1)
//   })
// }
// reverseFunc(numbers)
// console.log(result)



// 8
// functionga berilgan raqamni 0 dan o'sha raqamlargarcha bo'lgan sonlarni 3,5 va 15 ga bo'linish holatlarini tekshiring.
// kirilgan 25
// kutilgan javob - [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz' ]

// const result = []

// const fizzBuzzFunc = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push('FizzBuzz')
//     } else if (i % 5 == 0) {
//       result.push('Buzz')
//     } else if (i % 3 == 0) {
//       result.push('Fizz')
//     } else {
//       result.push(i)
//     }
//   }
// }

// fizzBuzzFunc(100)
// console.log(result)
