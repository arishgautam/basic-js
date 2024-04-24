 // events in js
let btn1 = document.querySelector("#btn1");
 btn1.onclick = () => {
 console.log("Button was clicked ");
 }
// // with objcect
 let btn2 = document.querySelector("#btn2");
 btn2.onclick = (e) => {
     console.log(e);
    console.log(e.type);
 }
// event listners

//add event listners

btn1.addEventListener("click", () =>{
   console.log("button was clicked handler1"); 
})

//handler 2 with object

btn1.addEventListener("click", (e) =>{
    console.log("button was clicked handler2");
    console.log(e);
 })
 //handle3
 const handler3 = () => {
    console.log("button was clicked - handler3"); 
 }
 btn1.addEventListener("click", handler3);

 // delete event listners
 btn1.removeEventListener("click",handler3);
