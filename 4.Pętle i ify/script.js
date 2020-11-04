// Zadanie 1
let n1 = 25001;
let n2 = 250023;

if (n1>n2) {
    console.log(n1);
} else if (n1 == n2) {
    console.log("Są równe");
}else{
    console.log(n2);    
}

// Zadanie 2
let n3 = 111;
let n4 = 22;
let n5 = 3111;

if (n3>n4 && n3>n5) {
    console.log(n3);
} else if (n4>n5 && n4>n5){
    console.log(n4);
}else{
    console.log(n5);
}

// Zadanie 3
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// Zadanie 4
let result = 0;
for (let i = 0; i < 10; i++) {
    result++;
}

console.log(result);

// Zadanie 5
var n = 40;
for (let i = 0; i < n; i++) {
    if (i == 0){
      console.log(i+" - nieparzysta");
    }else if(i % 2 == 0){
        console.log(i+" - parzysta");
    }else{
        console.log(i+" - nieparzysta");
    }    
}

// Zadanie 6
for (let i = 0; i < 10; i++) {    
    for (let j = 0; j < 3; j++) {
        console.log("i= " + i + ", j= " + j);
    } 
}

// Zadanie 7 
