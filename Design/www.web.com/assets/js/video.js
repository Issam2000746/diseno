
var medio;

function accionPlay()
{

	
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
	}
}
function accionReiniciar()
{
	
	medio.currentTime=0;
	medio.play();
	document.getElementById("play").value= "||" ;
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
}
function accionRetrasar()
{
	if(medio.currentTime >= 5){

		medio.currentTime -=5;
	} else{
		medio.currentTime =0;
	}
 

	//Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
}
function accionAdelantar()
{
if(medio.duration-medio.currentTime > 5){
    medio.currentTime +=5;

}else{
	 
	medio.currentTime = medio.duration;

}	
  //Contemplar que no existen valores mayores a medio.duration	
}
function accionSilenciar()
{
	if(document.getElementById("silenciar").value =="silenciar"){
		medio.muted = true;
		document.getElementById("silenciar").value ="escuchar";
	}else if(document.getElementById("silenciar").value =="escuchar"){
		medio.muted = false;
		document.getElementById("silenciar").value ="silenciar";

	}
		
	

	//Utilizar medio.muted = true; o medio.muted = false;
}
function accionMasVolumen()
{

	if(medio.volume +0.1 <= 1 ){

		medio.volume += 0.1;
	}
	
	//Contemplar que el valor máximo de volumen es 1
}
function accionMenosVolumen()
{
	
	if(medio.volume -0.1 >= 0 ){ 

		medio.volume -= 0.1;
	}

	//Contemplar que el valor mínimo de volumen es 0
}

function iniciar() 
{
	
	medio=document.getElementById('medio');
	let play=document.getElementById('play');
	let reiniciar=document.getElementById('reiniciar');
	let retrasar=document.getElementById('retrasar');
	let adelantar=document.getElementById('adelantar');
	let silenciar=document.getElementById('silenciar');


	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);