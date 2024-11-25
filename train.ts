/**TASK ZI

Shundan function yozing, bu function 3 soniydan so'ng
"Hello World!" so'zini qaytarsin.

MASALAN: delayHelloWorld("Hello World"); return "Hello World"; */


function delayHelloWorld(input: string) {
    let word = setTimeout(() => {
        console.log(input);
      }, 3000);
      return word;
}

console.log(delayHelloWorld("olma"));
