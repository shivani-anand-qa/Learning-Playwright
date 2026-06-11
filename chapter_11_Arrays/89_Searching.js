let results = ['pass', 'fail', 'pass', 'error', 'fail'];

//indexOf-returns first index, or -1 if not found
console.log(results.indexOf('fail')); //1
console.log(results.indexOf("skip")); //-1

//lastIndexOf-searches from the end
console.log(results.lastIndexOf('fail'));//4

//includes-returns boolean
console.log(results.includes('error'));
console.log(results.includes('skip'));

//find-returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);

let s = nums.findIndex(n => n > 20);//1
console.log(s);

console.log(nums.findLastIndex(n => n > 40));//3
console.log(nums.findLast(n => n > 30)); //45