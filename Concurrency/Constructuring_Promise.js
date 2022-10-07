/*
Membuat executorFunction yang merupakan cara untuk menggunakan Promise
resolve dan reject merupakan fungsi bawaan dari JavaScript
pada fungsi tersebut resolve, reject merupakan parameter dari fungsi executorFunction
*/
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 //Membuat fungsi yang menghasilkan keluaran fungsi executorFunction
const makeCoffee = () => {
    return new Promise(executorFunction);
}
//membuat fungsi makeCoffe agar dapat berjalan secara asynchronus
const coffeePromise = makeCoffee();
//print out ke console
console.log(coffeePromise);
 
 
/* output
Promise { 'Kopi berhasil dibuat' }
*/