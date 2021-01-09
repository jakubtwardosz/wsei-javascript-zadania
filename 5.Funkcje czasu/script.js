// Zadanie 1

let i = 0;
const time = setInterval(
    function(){
        i++;
        console.log("Cześć po raz " + i);

        if(i <= 15){
            clearInterval(time);
        }
    }, 3000);