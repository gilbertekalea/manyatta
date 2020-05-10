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

