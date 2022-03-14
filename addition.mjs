import {
  and,
  or,
  xor,
} from './xor.mjs';

export const addition = (a, b, c) => {
  let sum = xor(xor(a, b), c)
  let carry = or(and(xor(a, b), c), and(a, b))
  return `${sum}, 进${carry}`;
}

console.log(`0 + 0 进 0 = 0 + 0 + 0 = ${addition(0, 0, 0)}`)
console.log(`0 + 1 进 0 = 0 + 1 + 0 = ${addition(0, 1, 0)}`)
console.log(`1 + 0 进 0 = 1 + 0 + 0 = ${addition(1, 0, 0)}`)
console.log(`1 + 1 进 0 = 1 + 1 + 0 = ${addition(1, 1, 0)}`)
console.log(`0 + 0 进 1 = 0 + 0 + 1 = ${addition(0, 0, 1)}`)
console.log(`0 + 1 进 1 = 0 + 1 + 1 = ${addition(0, 1, 1)}`)
console.log(`1 + 0 进 1 = 1 + 0 + 1 = ${addition(1, 0, 1)}`)
console.log(`1 + 1 进 1 = 1 + 1 + 1 = ${addition(1, 1, 1)}`)