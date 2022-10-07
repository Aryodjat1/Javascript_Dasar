import _ from 'lodash';

// Jumlahkan Nilai Setiap Array

const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);
 
/* output
10
*/

// Fungsi Reduce
const myArray1 = [1, 2, 3, 4];
let sum1 = myArray.reduce((prev, curr) => { //hilangkan angka pada variabel sewaktu running
    return prev + curr;
});
 
console.log(sum);
 
/* output
10
*/

// Meringkas Kode
const myArray2 = [1, 2, 3, 4]; //hilangkan angka pada variabel sewaktu running
const sum2 = _.sum(myArray);
 
console.log(sum);
 
/* output
10
*/