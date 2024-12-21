/**
 TASK ZM:

Shunday function yozing, va bu function parametr
sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
raqamlarni orqasiga o'girib qaytarsin

MASALAN: reverseInteger(123456789); return 987654321;

Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
o'girib (reverse) qilib qaytarmoqda.
 */

/*
function reverseInteger(num: number) {
  const teskarisi = Number(num.toString().split('').reverse().join(''));
    return teskarisi;
};
const result = reverseInteger(9876543210);
console.log(result);
*/

/** 
 TASK ZN:

Shunday function yozing, uni array va number parametri bo'lsin.
Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
almashtirib qaytarsin.

MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];
 */

/*
function rotateArray(array: number[], number: number) {
  const validIndex = number % array.length;
  return [...array.slice(number), ...array.slice(0, number)];
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3)); // [4, 5, 6, 1, 2, 3]
*/

/**
 Shunday function yozing, u 2 ta array parametr qabul qilsin.
Siz bu ikki arrayning qiymatlari o'xshash bo'lishini 
(ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

MASALAN:
areArraysEqual([1, 2, 3], [3, 1, 2]) // true
areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
areArraysEqual([1, 2, 3], [4, 1, 2]) // false

 */

/**
 function areArraysEqual(arr1: any[], arr2: any[]): boolean {
    return arr1.sort().toString() === arr2.sort().toString();
}

// Testlar
console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); // false
console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); // false

 */

/**
 TASK ZQ:

Shunday function yozing, bu function berilgan array parametr
ichida ikki marotaba yoki undan ko'p takrorlangan sonlarni alohida
array'da yagonadan qaytarsin qaytarsin.

MASALAN: findDuplicates([1,2,3,4,5,4,3,4]); return [3, 4];
 */

/*
function findDuplicates(arr: number[]): number[] {
  const seen = new Set<number>(); 
  const duplicates = new Set<number>(); 

  for (const num of arr) {
      if (seen.has(num)) {
          duplicates.add(num);
      } else {
          seen.add(num);
      }
  }

  return Array.from(duplicates);
}

// Testlar
console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); // [3, 4]
console.log(findDuplicates([1, 1, 2, 2, 3, 3, 3])); // [1, 2, 3]
console.log(findDuplicates([1, 2, 3, 4, 5])); // []
*/

/**
 TASK ZR:

Shunday function yozing, bu function,
berilgan parametr string tarkibidagi raqam va sonlarni
sanab object sifatida qaytarsin.

MASALAN: countNumberAndLetters(“string152%\¥”); return {number: 3, letter: 6};

 */

/*
function countNumberAndLetters(input: string): { number: number, letter: number } {
  let result = { number: 0, letter: 0 };

  for (let char of input) {
      if (char >= '0' && char <= '9') result.number++;
      else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) result.letter++;
  }

  return result;
}

console.log(countNumberAndLetters("string152%¥")); 
*/

/**
 TASK ZS:

Shunday function yozing, bu function parametrdagi array ichida
bir marotaba takrorlangan element'ni qaytarsin

MASALAN: singleNumber([4, 2, 1, 2, 1]); return 4;

 */

/*
function singleNumber(input: number[]): number {
  return input.reduce((acc, num) => acc ^ num, 0);
}

console.log(singleNumber([4, 2, 1, 2, 1]));
*/

/**
 TASK ZT:

Shunday function yozing, bu function parametrdagi string ichida
bir marotabadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin

MASALAN: firstUniqueCharIndex(“stamp”); return 0;

Yuqoridagi misolda, 'stamp' so'zi tarkibida barcha harflar bir marotabadan
ortiq takrorlanmagan, lekin shartga muvofiq, birinchi topilgan harf indeksi qaytarilmoqda.
 */

/*
function firstUniqueCharIndex(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i && s.lastIndexOf(s[i]) === i) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqueCharIndex("stamp"));
*/

/**
 Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
 */

/*
const stringToKebab = (input: string): string => 
  input.trim().toLowerCase().replace(/\s+/g, '-');


console.log(stringToKebab("I love Kebab"));
*/

/** 
 Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true
*/


function areParenthesesBalanced(input: string): boolean {
  let balance = 0;

  for (const char of input) {
      if (char === "(") balance++;
      if (char === ")") balance--;
      if (balance < 0) return 
  }

  return balance === 0; 
}

console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
console.log(areParenthesesBalanced("(balans)(yo'q)")); // false
console.log(areParenthesesBalanced("((()))")); // true
console.log(areParenthesesBalanced(")(")); // false
