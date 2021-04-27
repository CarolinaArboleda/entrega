var lanzamiento_1;
var lanzamiento_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var suma;
var turno = 0;
var puntos = 0;

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
    console.log("sus puntos son " + puntos);


  suma=lanzamiento_1+lanzamiento_2
  turno=turno+1;
  if ((suma==7 || suma==11)&&turno==1) {

    alert("¡Felicitaciones! Ganaste :D");
    turno=1;

  }
  else if ((suma==2 || suma==3 || suma==12)&&turno==1){

    alert("¡Qué mal! Pierdes el juego :(");
    turno=1;
    
  }
  else if (suma==4 || suma==5 || suma==6 || suma==8 || suma==10){

    alert("¡Ganaste un punto! :D");
    puntos = puntos+1
  }

  else if (suma==7 && turno != 1 && puntos==0){
    alert("¡Qué mal! Pierdes el juego :(");
    turno=1;

  }

}