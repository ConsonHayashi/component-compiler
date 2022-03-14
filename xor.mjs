
export const or = (a, b) => {
  return a | b;
}

export const and = (a, b) => {
  return a & b
}

export const not = (a) => {
  return !a;
}

export const xor = (a, b) => {
  return or(and(!a, b), and(!b, a));
}


console.log(`1 or 1: 1 | 1= ${or(1, 1)}`)
console.log(`0 or 1: 0 | 1= ${or(0, 1)}`)
console.log(`1 or 0: 1 | 0= ${or(1, 0)}`)
console.log(`0 or 0: 0 | 0= ${or(0, 0)}`)

console.log(`1 and 1: 1 & 1= ${and(1, 1)}`)
console.log(`0 and 1: 0 & 1= ${and(0, 1)}`)
console.log(`1 and 0: 1 & 0= ${and(1, 0)}`)
console.log(`0 and 0: 0 & 0= ${and(0, 0)}`)

console.log(`not 1: ~1 = ${not(1)}`)
console.log(`not 1: ~0 = ${not(0)}`)


console.log(`1 xor 1: = ${xor(1, 1)}`)
console.log(`0 xor 1: = ${xor(0, 1)}`)
console.log(`1 xor 0: = ${xor(1, 0)}`)
console.log(`0 xor 0: = ${xor(0, 0)}`)
