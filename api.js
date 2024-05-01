const Url = "https://cat-fact.herokuapp.com/facts"
// let promise = fetch(Url);
// console.log(promise);

const getfacts = async() => {
    console.log("gettin data ....");
let response = await fetch(Url);
console.log(response);
let data = await response.json();
console.log(data[3].text);
}
getfacts();