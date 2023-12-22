'use strict'
function Juego(apodo,vidas,valor){
this.apodo=apodo;
this.vidas=vidas;
this.valor=valor;

}

function realizarJuego(){
    
    


if(player1.valor>player2.valor){
    player22.vidas--;
    document.getElementById("vidasTO").innerHTML= `Vidas: ${player2.vidas}`;
    alert(`Gano jugador ${player1.apodo}`);
   
 }else{
    player1.vidas--;
    document.getElementById("vidasPO").innerHTML= `Vidas: ${player1.vidas}`;
    alert(`Gano jugador ${player2.apodo}`);

    
 }
    if(player1.vidas <= 0 || player2.vidas <=0 ){
      if(player1.vidas>0){
         alert(`${player1.apodo} ha ganado, felicidades"` )
        }else{
            alert(`${player2.apodo} ha ganado, felicidades"` )  
        }
    }
}

let player1 = new Juego(prompt("Ingrese su apodo"),3,0);
let player2= new Juego("Maquina",3,0);


let etiquetaPlayerOnenick= document.getElementById("nickPO").innerHTML= `Player: ${player1.apodo}`;
let etiquetaPlayerOnevidas= document.getElementById("vidasPO").innerHTML= `Vidas: ${player1.vidas}`;
let etiquetaPlayerOnevalor= document.getElementById("valorPO").innerHTML= `Valor: ${player1.valor}`;

let etiquetaPlayertwonick= document.getElementById("nickTO").innerHTML= `Player: ${player2.apodo}`;
let etiquetaPlayertwovidas= document.getElementById("vidasTO").innerHTML= `Vidas: ${player2.vidas}`;
let etiquetaPlayertwovalor= document.getElementById("valorTO").innerHTML= `Valor: ${player2.valor}`;


let boton = document.getElementById("btGO");

boton.addEventListener('click', function(){

    if(player1.vidas <= 0 || player2.vidas <=0 ){
        if(player1.vidas>0){
           alert(`${player1.apodo} ha ganado, felicidades"` ) 
           return;
          }else{
              alert(`${player2.apodo} ha ganado, felicidades"` )  
              return;
          }
      }

let valorPO = Number(prompt("Ingrese numero"));
let valorTO = Math.floor(Math.random()*10)+1;

player1.valor=valorPO;
player2.valor=valorTO;
document.getElementById("valorPO").innerHTML= `Valor: ${player1.valor}`;
document.getElementById("valorTO").innerHTML= `Valor: ${player2.valor}`;

    realizarJuego();

  
});
