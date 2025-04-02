
//DOM Manipulation

var h1_elemets=document.getElementsByTagName('h1');
console.log(h1_elemets[0]);
console.log(h1_elemets[0].innerText);//get element inner text

h1_elemets[0].innerText="Hello World";//change element inner text
h1_elemets[1].innerText="Hello Vinod";

console.log(h1_elemets[0].innerHTML);//get element inner html

h1_elemets[1].innerText="<h2>Hello</h2>";//it represents as a text
h1_elemets[1].innerHTML="<h2>Hello</h2>";//it represents as a html

var subject1=document.getElementById('subject-1');
var subject2=document.getElementById('subject-2');
var subject3=document.getElementById('subject-3');

subject1.innerText="Vinod Bro"

/*let subject_elements=document.getElementsByClassName('my-subject');
console.log(subject_elements[0]);
console.log(subject_elements[1]);*/

/*let mynames=document.getElementsByName('my-name');
console.log(mynames[0]);
console.log(mynames[0].innerText);
console.log(mynames[0].innerHTML);
mynames[0].innerText="TypeScript";*/

/*console.log(document.querySelector("h6 > p"));
console.log(document.querySelectorAll("h6 > p"));
console.log(document.querySelector("h6 > p").innerText);
document.querySelector("h6 > p").innerText="Hello World";
console.log(document.querySelectorAll("h6 > p"));
console.log(document.querySelectorAll("h6 > p")[1].innerText);
document.querySelectorAll("h6 > p")[1].innerText="Hello....";*/
