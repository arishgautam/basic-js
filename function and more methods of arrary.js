 //function defination
function myfunction()
{
console.log("hello first function made");
}
//function call
myfunction();

//function with parameter and argument
function myfunc(msg) // msg is parameter
{
console.log(msg);
}
myfunc("hello world") //hello world is argument
//arroow function 
const arrowsum = (a,b) => {
 console.log(a+b);   
}

//for each loop
let num = [1, 2, 3, 4, 5, 6, 7, 8];
num.forEach((value, index, array) => { //you do not need to call the function
console.log(value ,index,array);
})
work
let nums = [2, 3, 6, 9];
nums.forEach((num) => {
console.log(num*num);
}
)

// some important methods of arrays

 // map
 let n = [8, 7,6]
 let newarrary = n.map((value) => {
  return value*3;  
 });
 console.log(newarrary);

 //filter
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 let newarr = arr.filter((value) => {
   return value%2==0; 
 })
  console.log(newarr);

  // //reduce
  const output = arr.reduce((prev,cur) => {
   return prev+cur; 
  })
  console.log(output);


