
let pj1left = 0
let pj1right= 0
let positionpj1 = 10
	
setInterval(code, 8);

function code(){
	if (pj1left==1){
		console.log("asasa")
		positionpj1+=2
		document.getElementById('pj1').style.left = `${positionpj1}px`
		document.getElementById('pj1').style.transform = 'scaleX(1)';
		document.getElementById('pj1').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters3/ryu-walkf.gif)';
			

	}
	if (pj1right==1){
		console.log("asasa")
		positionpj1-=2
		document.getElementById('pj1').style.left = `${positionpj1}px`;
		document.getElementById('pj1').style.transform = 'scaleX(-1)';
		document.getElementById('pj1').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters3/ryu-walkf.gif)';
			}
	if (pj1left==0 && pj1right==0) {
		document.getElementById('pj1').style.backgroundImage = 'url(https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif)';

	}
}

document.addEventListener("keydown", function(event) {
    	if(event.key === "d"){
    		pj1left = 1

    	}
    })
document.addEventListener("keyup", function(event) {
    	if(event.key === "d"){
    		pj1left = 0
    	}
    })

document.addEventListener("keydown", function(event) {
    	if(event.key === "a"){
    		pj1right = 1

    	}
    })
document.addEventListener("keyup", function(event) {
    	if(event.key === "a"){
    		pj1right = 0
    	}
    })






//https://www.fightersgeneration.com/characters3/ryu-a.html