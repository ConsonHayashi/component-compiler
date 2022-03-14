

function toBinRecursive (num) {
  let result = [];
  let temp1 = num / 2;
  let temp2 = Math.floor(num % 2);
  result.push(temp2);
  if (temp1 < 1) {
    return result;
  } else {
    toBinRecursive(temp1).forEach(e => result.push(e));
    return result;
  }
}

function toBin (num) {
  return toBinRecursive(num).reverse().join("");
}

const args = process.argv.slice(2);

console.log(toBin(args[0]))
console.log(toBin(2))
console.log('expect 10')
console.log(toBin(16))
console.log('expect 10000')
console.log(toBin(127))
console.log('expect 1111111')
console.log(toBin(128))
console.log('expect 10000000')