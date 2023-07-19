let fname = document.getElementById("fname").Value;
console.log(fname);

let lname = document.getElementById("lname").Value;
console.log(lname);

let add = document.getElementById("add").Value;
console.log(add);

let pin = document.getElementById("pin").Value;
console.log(pin);
let gender = document.querySelector('input[name="gender"]:checked').value;
console.log(gender);

let foods = [];
let checkboxes = document.getElementsByName('foods[]');
for(let i=0;i<checkboxes.length;i++){
if(checkboxes[i].checked){
     foods .push(checkboxes[i].value);
}
}
console.log(foods);

let state= document.getElementById("state").Value;
console.log(state);

let country = document.getElementById("country").value;
console.log(country);

