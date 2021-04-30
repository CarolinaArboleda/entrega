var lanzamiento_1;
var lanzamiento_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var suma;
var turno = 0;
var punto = 0;

window.onload = init;

function init(){
  dado1 = document.getElementById("dado1");
  dado2 = document.getElementById("dado2");
  boton_tirar = document.getElementById("boton_tirar");
  boton_tirar.addEventListener("click",jugar);
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function tirardado(){
  return Math.floor(Math.random() * 6) + 1 ;
}

function actualizarDado(ref,cara){
  ref.style.backgroundPosition=posiciones[cara-1]+"px";
}

function jugar(){
    lanzamiento_1=tirardado();
    lanzamiento_2=tirardado();
    actualizarDado(dado1,lanzamiento_1);
    actualizarDado(dado2,lanzamiento_2);

  suma=lanzamiento_1+lanzamiento_2
  turno=turno+1;

  if ((suma==7 || suma==11)&&turno==1) {

    alert("¡Felicitaciones! Ganaste :D");
    turno=0;


  }
  else if ((suma==2 || suma==3 || suma==12)&&turno==1){

    alert("¡Qué mal! Pierdes el juego :(");
    turno=0

  }

  else if (suma==7 && turno != 1){
    alert("¡Qué mal! Pierdes el juego :(");
    turno=0;
    punto=0;


  }

  else if (suma==4 && turno==1){
    alert("Se establece el punto como 4");
    punto=4;

  }

  else if (suma==5 && turno==1){ 
    alert("Se establece el punto como 5");
    punto=5;

  }

  else if (suma==6 && turno==1){
    alert("Se establece el punto como 6");
    punto=6;

  }

  else if (suma==8 && turno==1){
    alert("Se establece el punto como 8");
    punto=8;

  }

  else if (suma==9 && turno==1) {
    alert("Se establece el punto como 9");
    punto=9;

  }

  else if (suma==10 && turno==1){
    alert("Se establece el punto como 10");
    punto=10;

  }

  else if (suma==punto && turno!=1){
    alert("¡Felicitaciones! Ganaste :D");
    turno=0;
    punto=0;

  }

console.log("turno " + turno);
console.log("el punto es " + punto);


}