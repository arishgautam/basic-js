// // object
// const employee = {
//    calcTax () {
//     console.log("the tax is 50%");
//    },
// };

// const ramhari = {
//     salary: 50000,
// };

// ramhari.__proto__ = employee;

// //class and object
// class toyotaCar {
//     constructor (){
//        console.log("constructor created"); 
//     }

//     start () {
//        console.log("start"); 
//     }

//     stop () {
//        console.log("stop"); 
//     }
// }

// let supra = new toyotaCar();
// let hilux = new toyotaCar();

// // inherittence
// class parent {
//   worker () {
// console.log("i am a parent");
//   } 
// }
// class child extends parent {
// student () {
// console.log("i am child");  
// }
// }
// let obj = new child();

// super keyword
class person {
  constructor () {
   this.species = "homo sapiens";
  }
  wakeUp() {
   console.log("wake up ");
  }
}

 class enginner extends person {
   constructor(branch) {
     super(); //to invoke parent class constructor
     this.mybranch = branch; 
   }
   work () {
      console.log("solve problem , build something");

   }
 }
 let eobj = new enginner("civil engg");