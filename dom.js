
console.dir(document);
console.log(document);

// // for  selecting by id
let h = document.getElementById("h")
console.dir(h);

//for selecting by class
let hs = document.getElementsByClassName("i")
console.dir(hs); //h=headin and hs =headings\

//for selecting by tags
let parhas = document.getElementsByTagName("p")
console.log(parhas);

//queryselectors yesma tags id ra tag sabai use garna milxa
let firstEl = document.querySelector("p")
console.log(firstEl);

//for all
let allEl = document.querySelectorAll("p")
console.log(allEl); //crates a node

// for attribue
let div = document.querySelector("div");
console.log(div);
 let id = div.getAttribute("id");
 console.log(id);
 let h3 = document.querySelector("h3");
 console.log(h3.setAttribute("class","newclass"));

//for style
div.style.backgroundColor = "green";

//create element
let newbtn = document.createElement("button");
newbtn.innerText = "do not click me";
console.log(newbtn);

//append
div.append(newbtn);

//prepend
let scbtn = document.createElement("button");
scbtn.innerText = "plz do not clickme"
console.log(scbtn);
h3.prepend(scbtn);

//for before write .before 

//for after write .after

// delete
let p = document.querySelector("p1");
p.remove();
