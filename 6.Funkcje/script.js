// Zadanie 1

function myFunc (){
    console.log('Udało się');
}

myFunc();

// Zadanie 2 

var nr = 5
function number(nr){
    console.log(nr);
}

number(nr);

// Zadanie 3 - do poprawy

var tab = [1,2,3,4,5,6];

function myFuncTab(tab){
    return;
}

console.log(myFuncTab(tab));

// Zadanie 4

function printString(str){
    let i=0;
    const timer=setInterval(()=>{
        if(i<5){
            console.log(str);
            i++;
        }else{
            console.log("koniec");
            clearInterval(timer)
        }
    }, 3000)
}
printString("czekaj");