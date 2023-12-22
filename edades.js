'use strict'
let edad= ["15","45","50"];

edad.splice(1,0,"22")

for(let i=0; i<edad.length;i++){

    if(edad[i]>25){
        alert(edad[i]);
    }
}