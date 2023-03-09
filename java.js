
var pj1 = document.getElementById('pj1');
var pj2 = document.getElementById('pj2');

let pj1left = 0
let pj1right= 0
let positionpj1 = 10
let pj1golpe = 0

let pj2left = 0
let pj2right= 0
let positionpj2 = 1000
let pj2golpe = 0
let posepj1 = 1
	
function esperar(seg){
	 setTimeout(function(){pj1golpe = 0}, 380);
	 setTimeout(function(){ document.getElementById('pj1').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif)';}, seg);
}

setInterval(code, 8);

function code(){
	if (pj1left==1 && pj1golpe == 0){		

		if(positionpj1 != (positionpj2-40) ) {positionpj1+=2
		document.getElementById('pj1').style.left = `${positionpj1}px`}
		document.getElementById('pj1').style.transform = 'scaleX(1)';
		document.getElementById('pj1').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters3/ryu-walkf.gif)';
		posepj1 = 1;
			

	}

	if (pj1right==1 && pj1golpe == 0 ){
		
		if(positionpj1 != (positionpj2+40) ) {positionpj1-=2
		document.getElementById('pj1').style.left = `${positionpj1}px`;}
		document.getElementById('pj1').style.transform = 'scaleX(-1)';
		document.getElementById('pj1').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters3/ryu-walkf.gif)';
		
		posepj1 = -1;
			}

	if (pj1left==0 && pj1right==0 && pj1golpe == 0) {
		document.getElementById('pj1').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif)';

	}












	if (pj1left==0 && pj1right==0 && pj1golpe == 0) {
		document.getElementById('pj2').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters2/ken-ts-stance.gif)';





	}
}

document.addEventListener("keydown", function(event) {
    	if(event.key === "d" || event.key === "D"){
    		pj1left = 1

    	}
    })
document.addEventListener("keyup", function(event) {
    	if(event.key === "d" || event.key === "D"){
    		pj1left = 0
    	}
    })

document.addEventListener("keydown", function(event) {
    	if(event.key === "a" || event.key === "A"){
    		pj1right = 1

    	}
    })
document.addEventListener("keyup", function(event) {
    	if(event.key === "a"  || event.key === "A"){
    		pj1right = 0
    	}
    })

document.addEventListener("keydown", function(event) {
    	if(event.key === "j" || event.key === "J"){
    		if(pj1golpe == 0){

	 setTimeout(function(){document.getElementById('pj1').style.backgroundImage = 'url(punch0.png)';}, 50);
	 setTimeout(function(){document.getElementById('pj1').style.backgroundImage = 'url(punch1.png)';}, 100);
 		golpear(pj1)
		pj1golpe = 1;
		esperar(500);}

    	}
    })

function golpear(pj){ if (pj == pj1) {


		if ( positionpj1 <= positionpj2 && (positionpj1+80) > (positionpj2) && posepj1 == 1 ){ 
	 	setTimeout(function(){document.getElementById('pj2').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters2/ken-hit.gif)';}, 50);
	 	setTimeout(function(){document.getElementById('pj2').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters2/ken-ts-stance.gif)';}, 300);}


		if ( positionpj1 >= positionpj2 && (positionpj1-80) < (positionpj2) && posepj1 == -1 ){ 
	 	setTimeout(function(){document.getElementById('pj2').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters2/ken-hit.gif)';}, 50);
	 	setTimeout(function(){document.getElementById('pj2').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters2/ken-ts-stance.gif)';}, 300);}


		
	}
}




//https://www.fightersgeneration.com/characters3/ryu-a.html