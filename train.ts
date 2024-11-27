/**
 TASK ZM:

Shunday function yozing, va bu function parametr
sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
raqamlarni orqasiga o'girib qaytarsin

MASALAN: reverseInteger(123456789); return 987654321;

Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
o'girib (reverse) qilib qaytarmoqda.
 */


function reverseInteger(num: number) {
  const teskarisi = Number(num.toString().split('').reverse().join(''));
    return teskarisi;
};
const result = reverseInteger(9876543210);
console.log(result);
