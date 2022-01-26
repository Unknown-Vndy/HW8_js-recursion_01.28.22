'use strict';

console.log(pow(3, 3));


function pow(base, exponent) {
   if (exponent === 1) {
      return base;
   } else {
      return base * pow(base, exponent - 1);
   }
}




let result = [];
function bracketWrapper(n) {
   if (n === 0) {
      return;
   }
   result.push('(');
   bracketWrapper(n - 1);
   result.push(')');
   return result;
}


bracketWrapper(3);
console.log(result.join('\n'));
//or

// bracketWrapper(3);
// function bracketWrapper(n) {
//    if (n === 0) {
//       return;
//    }
//    console.log('(');
//    bracketWrapper(n - 1);
//    console.log(')');
// }


Array.prototype.flat1 = function (depth = 1) {
   const flattenedArray = [];
   flat(this);
   function flat(arr) {
      arr.forEach(item => Array.isArray(item) ? flat(item) : flattenedArray.push(item));     
   }
   return flattenedArray;
}
// сумел вытащить все элементы, с глубиной не решил

const arr = [1, 2, 3, [4, [5, 6, [7, 8]]], 9, [10, 11], 12, [13, 13, [15]]];

console.log(arr.flat());
console.log(arr.flat1());