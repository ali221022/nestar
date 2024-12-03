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

function rotateArray(array: number[], number: number) {
  const validIndex = number % array.length;
  return [...array.slice(number), ...array.slice(0, number)];
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3)); // [4, 5, 6, 1, 2, 3]