// Zadanie 1

const table = ["siemka", 1, 2];
for(let i=0; i<table.length ; i++){
    console.log(table[i]);
}

// Zadanie 2

const table = [3, 1, 2, 5, 6, 3];

console.log(table[0]);
console.log(table[table.length -1]);
console.log(table);

// Zadanie 6 

function average(table) {
    var sum = 0;
    var length = 0
    table.forEach(item => {
        if (item %2 == 0) {
            sum += item;
            length++;
        }
    })
    return sum / length;
}

console.log(average(new Array(1,2,3,4,5,6)));

// Zadanie 7

var table = [1,45,22,2,8,54,5,99,88];
function sort(table){
    return table.sort((a,b)=>a-b);
}

console.log(sort(table));


// Zadanie 8

// var tab1 = [1,2,3]
// var tab2 = [4,5,6]

// var result = [5,7,9]

function func(tab1, tab2){
    var resultTab = [];
    for(var i = 0; i< tab1.length; i++){
        resultTab.push(tab1[i] + tab2[i]);
    }
    return resultTab;
}

const table1 = [1,4,6,8];
const table2 = [56,23,3,4];

console.log(func(table1,table2));