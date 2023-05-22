//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
  return string.split(" ");
}
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  const rna = dna.replaceAll("T", "U");
  return rna;
}
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min=function(list) {
 return Math.min(...list);
}

const max=function(list) {
    return Math.max(...list);
}
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    if (toReturn === 'value') {
        return Math.min(...arr);
    }
    return arr.indexOf(Math.min(...arr));
}
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    if (queue[queue.length - 1] === 'wolf') {
        return "Pls go away and stop eating my sheep";
    }
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === 'wolf') {
            const number = queue.length - i - 1;
            return "Oi! Sheep number " + number + "! You are about to be eaten by a wolf!"
        }
    }
}
//https://www.codewars.com/kata/beginner-lost-without-a-map
function maps(x) {
    return x.map(value => value * 2);
}
//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > arr[i - 1] + 1) {
            return arr[i];
        }
    }
    return null;
}
