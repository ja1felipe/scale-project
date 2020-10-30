export function generateFirstArray(lim: number) {
  let pp = 2;
  let ps = [pp];
  pp += 1;
  ps.push(pp);
  let test = true;
  let sqrtpp = 0;
  while (pp < lim) {
    pp += 2;
    test = true;
    sqrtpp = Math.sqrt(pp);
    for (let a of ps) {
      if (a > sqrtpp) break;
      if (pp % a === 0) {
        test = false;
        break;
      }
    }
    if (test) ps.push(pp);
  }
  return ps;
}

function sumNumbers(value: number): number {
  let sum = 0;

  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
}

function prodNumbers(value: number): number {
  let sum = 1;

  while (value) {
    sum *= value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
}

export function removeSumNumberFromArray(num: number, arr: number[]) {
  for (let i = arr.length; i > -1; i--) {
    if (sumNumbers(arr[i]) !== num) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

export function removeProductNumberFromArray(num: number, arr: number[]) {
  for (let i = arr.length; i > -1; i--) {
    if (prodNumbers(arr[i]) !== num) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

export function removeRestNumberFromArray(num: number, arr: number[]) {
  for (let i = arr.length; i > -1; i--) {
    if (arr[i] % 7 !== num) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
