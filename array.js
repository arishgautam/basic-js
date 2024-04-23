// //arrarys
let marks = [98, 97, 95, 93];
console.log(marks); 
console.log(marks.length);
let items = [250, 300, 400, 900];
for(let i=0; i<items.length;i++)
{
let offer = items[i]/10;
items[i] -= offer;
}
console.log(items);

//array methods

//push
 let animal = ["cow", "lion" ,"tiger", "panther"];
 animal.push("dog","cat");
 console.log(animal);

 //pop
 animal.pop();
 console.log(animal);

 //to string
 console.log(animal.toString());
 console.log(animal);

 // unshift
 let val = animal.unshift("cat");
 console.log (val);
 console.log(animal);

 //shift
 let value = animal.shift("cat");
 console.log (value);
 console.log(animal);

 //slice
 console.log(animal);
 console.log(animal.slice(1,2));
 
// //splice
 let num = [1, 2, 3, 4, 5, 6];
 num.splice(3, 2, 101, 102);
 //add
num.splice(2,0,101);

