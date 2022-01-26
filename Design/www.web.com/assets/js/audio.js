let audio;

function iniciar() 
{
	
	audio=document.getElementById('audio');
	let cacion1=document.getElementById('cacion1');
	let cacion2=document.getElementById('cacion2');
	let cacion3=document.getElementById('cacion3');
	let cacion4=document.getElementById('cacion4');



	cacion1.addEventListener('click', audiocacion1);
	cacion2.addEventListener('click', audiocacion2);
	cacion3.addEventListener('click',audiocacion3);
	cacion4.addEventListener('click',audiocacion4);

}

window.addEventListener('load', iniciar, false);


function audiocacion1(){

audio.src = "assets/audio/cacion1.mp3"; 
}

function audiocacion2(){

    audio.src = "assets/audio/city.mp3"; 

}
function audiocacion3(){

    audio.src = "assets/audio/mar.mp3"; 

}

function audiocacion4(){

    audio.src = "assets/audio/bn.mp3"; 

}

