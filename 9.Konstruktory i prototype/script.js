// Zadanie 1 

function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    this.setAge = (age) =>{
        this.age = age;
    }
    this.setCity = (city) =>{
        this.city = city;
    }
}

// Zadanie 2

function Calculator(add, sub, div, mul, clear) {
    this.memory = [];

    this.add = function(a,b){
        this.memory.push('Dodawanie');
        return a + b;
    }

    this.sub = function(a,b){
        this.memory.push('Odejmowanie');
        return a - b;
    }
    
    this.div = function(a,b){
        this.memory.push('Dzielenie');
        return a / b;
    }
    
    this.mul = function(a,b){
        this.memory.push('Mnożenie');
        return a * b;
    }

    this.clear = function(){
        this.memory = [];
    }

}

const calc = new Calculator();
calc.sum(2,5);
calc.sum(2,5);

// Zadanie 3

function Example() {
    
    this.setNumber = function() {
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }

    this.checkNumber = function() { 
        console.log(this.number);
        if(this.number > 8){
            clearInterval(myInterval);
        }
    }

}

const newProgram = new Example();

const myInterval = setInterval(() => {

}, 1000);

// alt zadanie 3

function Constructor() { 
    this.number = 0;
    this.myInterval = undefined;
    
    this.init = function(){
        this.myInterval = setInterval(() => {
            this.setNumber()
        }, 1000);
    }
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }
    
    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5) {
            clearInterval(this.myInterval);
        }     
    }
}

const newProg = new Constructor();
newProg.init();


