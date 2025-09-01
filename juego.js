let tablero = [];

let jugador1="jugador1";
let fichaJugador1="img/gryffindor.jpg";
let jugador2="jugador2";
let fichaJugador2="img/ravenclaw.jpg";
let turno=1;
let winner=0;

const empate = () => {
  if (tablero[0] &&  tablero[1] && tablero[2] && tablero[3] && tablero[4] && tablero[5] && tablero[6] && tablero[7] && tablero[8]) {
    const turnojugador = document.getElementById("turno");
    turnojugador.textContent = "Empate ";
  }
}

// Evento formulario
document.getElementsByTagName("form")[0].addEventListener('submit', function (e) { 
    e.preventDefault(); 
    // Modifica css
    const table = document.getElementsByTagName("table")[0];
    table.style.display="table";
    const form = document.getElementsByTagName("form")[0];
    form.style.display="none";
     const botones = document.getElementById("botones");
     botones.style.display="flex";
    // Guarda los valores
    jugador1 = e.target.jugador1.value;
    jugador2 = e.target.jugador2.value;
    fichaJugador1 = "img/" + e.target.ficha.value.toLowerCase() + ".jpg";
    fichaJugador2 = "img/" + e.target.ficha2.value.toLowerCase() + ".jpg";
    const turnojugador = document.getElementById("turno");
    turnojugador.textContent = "Turno del jugador " + jugador1;
  });

  //Evento celda 0
  document.getElementById("0").addEventListener('click', function () {
  const celda = document.getElementById("0");
  if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 0";
      imagen.loading="lazy"
      celda.appendChild(imagen);
      tablero[0]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[1] === 1 && tablero[2] === 1) || (tablero[3] === 1 && tablero[6] === 1) || (tablero[4] === 1 && tablero[8] === 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2;
      imagen.alt=fichaJugador2 + " celda 0";
      imagen.loading="lazy"
      celda.appendChild(imagen);
      tablero[0]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
      if ((tablero[1] === 2 && tablero[2] === 2) || (tablero[3] === 2 && tablero[6] === 2) || (tablero[4] === 2 && tablero[8] === 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      } else {
        empate();
      }
    }
  }
});

//Evento celda 1
document.getElementById("1").addEventListener('click', function () {
const celda = document.getElementById("1");
  if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 1";
      imagen.loading="lazy"   
      celda.appendChild(imagen);
      tablero[1]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[0] === 1 && tablero[2] === 1) || (tablero[4] === 1 && tablero[7] === 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2
      imagen.alt=fichaJugador2 + " celda 1";
      imagen.loading="lazy"  
      celda.appendChild(imagen);
      tablero[1]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
      if ((tablero[0] === 2 && tablero[2] === 2) || (tablero[4] === 2 && tablero[7] === 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      } else {
        empate();
      }
    }
  }     
});

//Evento celda 2
document.getElementById("2").addEventListener('click', function () {
const celda = document.getElementById("2");
if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 2";
      imagen.loading="lazy"
      celda.appendChild(imagen);
      tablero[2]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[0] === 1 && tablero[1] === 1) || (tablero[4] === 1 && tablero[6] === 1) || (tablero[5] === 1 && tablero[8] === 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2;
      imagen.alt=fichaJugador2 + " celda 2";
      imagen.loading="lazy" 
      celda.appendChild(imagen);
      tablero[2]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
      if ((tablero[0] === 2 && tablero[1] === 2) || (tablero[4] === 2 && tablero[6] === 2) || (tablero[5] === 2 && tablero[8] === 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      } else {
        empate();
      }
    }
  }     
});

//Evento celda 3
document.getElementById("3").addEventListener('click', function () {
const celda = document.getElementById("3");
if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 3";
      imagen.loading="lazy"  
      celda.appendChild(imagen);
      tablero[3]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[0] === 1 && tablero[6] === 1) || (tablero[4] === 1 && tablero[5] === 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2;
      imagen.alt=fichaJugador2 + " celda 3";
      imagen.loading="lazy"
      celda.appendChild(imagen);
      tablero[3]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
      if ((tablero[0] === 2 && tablero[6] === 2) || (tablero[4] === 2 && tablero[5] === 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      } else {
        empate();
      }
    }
  }        
});

//Evento celda 4
document.getElementById("4").addEventListener('click', function () {
const celda = document.getElementById("4");
if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 4";
      imagen.loading="lazy"
      celda.appendChild(imagen);
      tablero[4]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[1] === 1 && tablero[7] === 1) || (tablero[3] === 1 && tablero[5] === 1) || (tablero[0] === 1 && tablero[8] === 1) || (tablero[2] === 1 && tablero[6]=== 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2;
      imagen.alt=fichaJugador2 + " celda 4";
      imagen.loading="lazy" 
      celda.appendChild(imagen);
      tablero[4]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
      if ((tablero[1] === 2 && tablero[7] === 2) || (tablero[3] === 2 && tablero[5] === 2) || (tablero[0] === 2 && tablero[8] === 2) || (tablero[2] === 2 && tablero[6]=== 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      } else {
        empate();
      }
    }
  }        
});

//Evento celda 5
document.getElementById("5").addEventListener('click', function () {
const celda = document.getElementById("5");
if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 5";
      imagen.loading="lazy"
      celda.appendChild(imagen);
      tablero[5]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[2] === 1 && tablero[8] === 1) || (tablero[3] === 1 && tablero[4] === 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2;
      imagen.alt=fichaJugador2 + " celda 5";
      imagen.loading="lazy" 
      celda.appendChild(imagen);
      tablero[5]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
     if ((tablero[2] === 2 && tablero[8] === 2) || (tablero[3] === 2 && tablero[4] === 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      }  else {
        empate();
      }
    }
  }         
});

//Evento celda 6
document.getElementById("6").addEventListener('click', function () {
const celda = document.getElementById("6");
if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 6";
      imagen.loading="lazy"  
      celda.appendChild(imagen);
      tablero[6]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[0] === 1 && tablero[3] === 1) || (tablero[7] === 1 && tablero[8] === 1) || (tablero[2] === 1 && tablero[4] === 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2;
      imagen.alt=fichaJugador2 + " celda 6";
      imagen.loading="lazy"  
      celda.appendChild(imagen);
      tablero[6]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
      if ((tablero[0] === 2 && tablero[3] === 2) || (tablero[7] === 2 && tablero[8] === 2) || (tablero[2] === 2 && tablero[4] === 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      } else {
        empate();
      }
    }
  }          
});

//Evento celda 7
document.getElementById("7").addEventListener('click', function () {
const celda = document.getElementById("7");
if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 7";
      imagen.loading="lazy"
      celda.appendChild(imagen);
      tablero[7]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[1] === 1 && tablero[4] === 1) || (tablero[6] === 1 && tablero[8] === 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2;
      imagen.alt=fichaJugador2 + " celda 7";
      imagen.loading="lazy" 
      celda.appendChild(imagen);
      tablero[7]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
      if ((tablero[1] === 2 && tablero[4] === 2) || (tablero[6] === 2 && tablero[8] === 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      } else {
        empate();
      }
    }
  }         
});

//Evento celda 8
document.getElementById("8").addEventListener('click', function () {
const celda = document.getElementById("8");
if (celda.innerHTML==="" && winner === 0) {
    if (turno === 1){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador1;
      imagen.alt=fichaJugador1 + " celda 8";
      imagen.loading="lazy"
      celda.appendChild(imagen);
      tablero[8]=1;
      turno = 2;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador2;
      if ((tablero[2] === 1 && tablero[5] === 1) || (tablero[6] === 1 && tablero[7] === 1) || (tablero[0] === 1 && tablero[4] === 1)) {
        winner = 1;
        turnojugador.textContent = "Gana " + jugador1;
      } else {
        empate();
      }
    } else if (turno === 2){
      const imagen = document.createElement("img");
      imagen.src=fichaJugador2;
      imagen.alt=fichaJugador2 + " celda 8";
      imagen.loading="lazy" 
      celda.appendChild(imagen);
      tablero[8]=2;
      turno = 1;
      const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
      if ((tablero[2] === 2 && tablero[5] === 2) || (tablero[6] === 2 && tablero[7] === 2) || (tablero[0] === 2 && tablero[4] === 2)) {
        winner = 2;
        turnojugador.textContent = "Gana " + jugador2;
      } else {
        empate();
      }
    }
  }         
});

document.getElementById("nuevaPartida").addEventListener('click', function (){
location.reload();
});

document.getElementById("revancha").addEventListener('click', function (){
  tablero = [];
  turno=1;
  winner=0;
  const turnojugador = document.getElementById("turno");
      turnojugador.textContent = "Turno del jugador " + jugador1;
  for (let i = 0; i < 9; i++) {
    const celda = document.getElementById(i);
    celda.innerHTML="";
  }
});
