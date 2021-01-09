// Zadanie 1

var car = {
    brand: "Mercedes",
    color: "Gray",
    year: "2020",
    makechange: function
    newMake(newMake)
    {
        this.brand = newMake;
    }
};

// Zadanie 2

car.makechange("BMW");
console.log(car.make);
 
// Zadanie 3

let obj = {
    sum: 0,
    calculateSum(testArray) {
        this.sum = testArray.reduce((a, b) => {return a + b});
    }
}

obj.calculateSum([20, 50, 30]);
console.log(obj.sum);

// Zadanie 4

var car2 = {
    name: "BMW",
    age: 12
}

for(let key in car){
    console.log(key + " : " + car[key]);
}

// Zadanie 5

var car3 = {
    brand: "Mercedes",
    color: "Gray",
    year: "2020"
};

car.newColors = {
    color1: "Brown",
    color2: "Green"
};

console.log(car.newColors.color1);

// Zadanie 6 

car.wheels = "super";

car.sayHello = () => console.log("Hello");

car.sayHello();
console.log(car.wheels);