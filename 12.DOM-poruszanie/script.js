// Zadanie 1 

console.log(document.getElementById("buzz").parentElement);

console.log(document.getElementById("buz").nextElementSibling);

var dzieci = document.getElementById("fuz").children;

var rodzic = document.getElementById("foo").parentNode;
console.log(rodzic);

var pierwszeDziecko = document.getElementById("foo").children[0];

var middleDziecko = document.getElementById("foo").children[1];


// Zadanie 2 

const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
                   children[0].children[0].textContent);
    })
}

ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);

// Zadanie 3 

const add = (elements) => {
    for(var i = 0; i < elements.length; i++){

        elements[i].addEventListener("click", function(){

        })
   }
}

add(document.getElementById('#ex3 button'));


