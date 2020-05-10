let button = document.getElementById("enter");
let inp = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputlength (){
    
    return inp.value.length;
}

function createListElement (){
   let li = document.createElement("li");
    li.appendChild(document.createTextNode(inp.value));
    ul.appendChild(li);
}

function addListAfterClick () {
        if (inputlength () > 0){
       createListElement ();    
    };  
    inp.value = "";
}

button.addEventListener("click",  addListAfterClick ());

inp.addEventListener("keypress", function (event) {
    if (inputlength () > 0 && event.which===13){
    createListElement();
    inp.value="";
    };
});

//BACKROUND COLOR GENERATOR 
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let colorRef = document.querySelector("h4");

//Display color information on first page load

//apply current background color when the page loads
function checkload (){
body.style.background ="Linear-gradient(to right, #f007e4,  #0508e6)";
css.textContent = "Linear-Gradient (to right, " 
+ " " 
+ color1.value 
+ " , " 
+ color2.value +");";
}

//setting gradient of your choice, 
function setGradient (){
    body.style.background = 
    "Linear-Gradient(to right, " 
    + color2.value 
    + ","
    + color1.value 
    + ")";
let colorArr = "(" + ""+ color1.value + " " + "," + color2.value + ")";

//displaying the color text on html
css.textContent ="RGB FORMAT :" + " " + body.style.background +";" 
colorRef.textContent = "HEX FORMAT : " + "Linear-gradient (to right," + colorArr + ");";
}

//eventlistening
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

//!advanced function 
//closures
const first = () => {
    const greet = "hi";
    const second= () => {
        alert(greet);
    }
    return second;
}
const newFun = first ();
newFun();
//closures- a function ran. the function executed. it's never going to be executed again.blue.blue
// but it is going to remember that there are reference s to those variables.blue.
//so the child scope always has access to the parent scope. 

//Currying is the process of converting a fucntion that takes multiple arguments into a function that takes them one at a time. 
 const multply = (a,b) => a * b;
 const  curriedMultiply = (a) => (b) => a + b;
 curriedMultiply (3);

//compose - act of putting two functions together to form third function where the output one function is the input of the other. 
  const compose = (f, g) => (a)=> f(g(a));
  const sum = (num) => num +1;
  compose(sum, sum)(5);

  //Good practice::: avoiding side effects and functional purity
  // creating deterministic programming. 
  

  //Advanced arrays
  //forEach does what the function asks to be done

   const array = [10, 2, 43, 4, 25, 6, 27];
   const double = [];
   const  newArr = array.forEach((num) => {
       double.push(num + "!");
   });

   console.log ("forEach", double);

//Map, reduce and filter
//Maps always need you to return something
//Maps transform + creates a new array. 
const  mapArray = array.map((num) => {
    return num*4;
});
//!shorthand*****//
//const mapArray = array.map(num => num*4);
//console.log ("shortHandMap", mapArray);
console.log ("for map array", mapArray);

//filter--> you can put any conditions. 
const filterArray = array.filter((num) => { 
   return num > 5;
});

console.log("filter", filterArray);
//****!shorthand****//
 //const filterArray = array.filter(num => num >5);
 //console.log("shorthandfilter", filterArray);
 
 //reduce is very powerful method
  const reduceArray = array.reduce((accumulator, num)=> {
    //accumulator is something we can store information of things that happens in the program
    return(accumulator + num);
  }, //!!!!definng accumualtor!!!//
  0);
  console.log("reduce", reduceArray);

  //!Advanced object
  //ref type: context and instantiation
//instantiation
 class Player {
  constructor (name, type){
      console.log("player", this);
      this.name = name;
      this.type = type;
  }  

  introduce () {
    console.log(`hi I am ${this.name}, I am a ${this.type}`);
  }
 }

 class Wizzard extends Player {
     constructor (name, type){
         super(name, type);
         console.log("Wizzard", this)
     }

play(){
    console.log (`WEEEEEE I am a ${this.type}`);
}
 }
 const Wizzard1 = new Wizzard ("shelly","Healer");
 const Wizzard2 = new Wizzard ("shawn", "Dark horse");

//!pass by type and reference
var c = [1, 2,3 ,4];
var d = c;
var d= [].concat(c);

d.push(124733939393);
console.log(c);
console.log(d);

let obj = {a:"a", b:"b", c: 
{ deep:"try cop me"}
};
//We want to have this piece of information in a different part of the loaction
let clone = Object.assign({ }, obj);

//spread operator is another way of cloning
//shallow cloning,we only clone the first layer of the object
let clone2 = {...obj};

//!deep cloning, we use JSON

let superClone = JSON.parse(JSON.stringify(obj));

//BY using a clone operator, our new object won't be modified. 
obj.c.deep = "hahaha"; 
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

//type coercion-language converting one certain type to anothe type. 
//In Javascript type coercion happens when we use a double cequal sign

//!ES7
//Includes method
const pets = ["cat", "dog", "bat"];
pets.includes("dogs");
console.log(pets);

//!exponential operator
 
const square = (x) => x**2;
const cube = (y) => y**3;

//!ES8
//String padding
      //.padStart() and .padEnd()
let objct = {
    sername0 : "Santa",
    sername1:  "Rudlof",
    sername2 : " Mr hehe"
}
//iterating or looping through objects
Object.keys(objct).forEach((key, index) => {
    //"tradition method of looping object"
    console.log (key, objct[key]);
});

Object.values(objct).forEach(value => {
    //"New method of looping using values",
    console.log(value);
});


Object.entries(objct).forEach(entry => {
    //"New method of looping using entries",
    console.log(entry);
});

Object.entries(objct).map(value =>{
    return value[1] + value[0].replace("username", "");
});

//!E10
//flat ()--> a method we can use in arrays. 
//Can be used to make nested array one array. 
const arry = [1, 3, 5, 6, 7];
arry.flat();
console.log (arry.flat());
 const arr = [1, 3, 5, [10, 68, 90], 50];
 arr.flat();
console.log(arr.flat());

//Can be used to clean data in an array, by removing empty spaces
const entries = ["paul", "nana", "Ekale","cindy",,,,,,,,"Nice", "no empty",,,,,,"last"];
entries.flat();
console.log(entries.flat());
//flatMap()--> Allow us to use flat method and map method on an array:

const jurassicPark = [
    ["dinasour", "beatle"], 
    "Fish", "tilapia", "NilePerch",
    ["elephant", "Lion"],
     "tiger",  "Zebra",
     ["hippotomus"]];
     const parkChaos = jurassicPark.flatMap(creature =>(creature +""+ "hippotomus"));
     console.log(parkChaos);
//flatMap allows the basic map function and flattens the result into a depth of one

//trimStart and trimEnd
const userEmail = "                       gile@gmaail.com";
const userEmail1 ="gaggga@gmail.com                      ";
 userEmail.trimStart();
 userEmail1.trimEnd();
 console.log(userEmail.trimStart());
 console.log(userEmail1.trimEnd());

//fromEntries--> transform a key values of pairs into an object. 
//entries convert object into arrays.
const userProfil =  [["commanderTom", 23],["dereksealnder", 40], ["hansel", ]];
Object.fromEntries(userProfil);
console.log(userProfil);

const studentName = [{
    name: "Gilbert",
    age: 34,
    school: "unis" 
},
{
    Name : "Charley",
    age: 45,
    school: "college"
},
{
    name: "marie",
    age: 20,
    school: "highschool"
}
];
Object.fromEntries(studentName);
console.log(studentName);

//try and catch block allow us to run piece of code and try and catch if there are errors
try {
    let n= 45;
    let num2 = 55;
    let add = num + num2;

} catch  {
console.log ("messed up");
}

//advanced loops

 const basket = [ "apples", "oranages", "grapes"];
 for (var i= 0; i <basket.length;i++ ){
     console.log(basket[i]);
 }
 basket.forEach(item => {
     console.log(item);
 });
//iterating over array. simple means,we are able to go one by one and look at the item
//for of

for (item of basket) {
    console.log (item);
}
//for in loop works with object, helps to loop over objects
//this is not iteratinf, with an object, we are enumerating, 
//Properties in an object are enumerable.

const fullBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item in fullBasket){
    console.log (fullBasket);
}

//debugging


 //MDN Example of constructor
 // Constructor method is a special method for creating and initializing an object
 //Created with aa class
 class Person {
     constructor(name){
         this.name = name;
     }
     introduceyourself (){
         console.log (`Hello, my name is ${this.name}, it is great to meet you all`);

     }
 }
const newName = new Person ();
newName.introduceyourself();
