// this is example of asynchnrous 
console.log("one");
// set time out used to tell the time to execute a function
function head() {
console.log("hello i am head");
}
setTimeout(head,1000); // 1seconds = 1000 milisecond

// another method
setTimeout(() => {
   console.log("hello i am head"); 
}, 4000);
console.log("two");
//fist one and tow will printed and then the function having set timeout will be printed in the seted time

// call backs in synchronous
function sum (a,b){
    console.log(a+b);
}
function calc (a,b,sumcb)
{
   sumcb(a,b);
}
calc(1,2,sum);

// for callbacks asynchronous
const hello = () => {
   console.log("namste");
}
setTimeout(hello,3000);

function getData (dataId, getNextData) {
  //2second
  setTimeout (() => {
    console.log("data", dataId);
    if (getNextData) {
        getNextData();
    }
  }, 2000);  
}
 //callbacks
 getData(1, () => {
  getData(2,() => {
  getData(3,() => {
  getData(4);
  })   
  })  
 })

 promises
 let promise = new Promise((resolve, reject) => {
    console.log("i am promise");
    resolve("printed");
 });

 function getData (dataId, getNextData) {
    return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log("data", dataId);
      resolve("sucess");
      
    },2000);
} );  
}
// promise chain
getData(1)
.then((res)=> {
   return getData(2); 
})
.then ((res) => {
   return getData(3); 
})
.then((res)=> {
   console.log(res); 
})

async function hi() {
   console.log("hello"); 
}

 function getData (dataId, getNextData) {
    return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log("data", dataId);
      resolve("sucess");
      
    },2000);
} );  
}
//async await
async function getAllData() {
await getData(1);
await getData(2);
await getData(3);
await getData(4);
}

//IfE immediatly invoked 
(async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    })();