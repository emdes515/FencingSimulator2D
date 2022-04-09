let warUiSelectors = {
    timer: document.querySelector('[war-timer]'),
    redLamp: document.querySelector('[war-red-lamp'),
    greenLamp: document.querySelector('[war-green-lamp]'),
    redScore: document.querySelector('[war-red-score]'),
    greenScore: document.querySelector('[war-green-score]'),
    play: document.querySelector('[war-play]'),
}

const warArr = []; 

function War(){
    this.sec = 0; 
    this.min = 3;
    this.isGo = false;
    this.greenScore = 12; 
    this.redScore = 1; 
    this.whoIsWin = ''; 
    this.warID = warArr.length; 

    
    warUiSelectors.play.addEventListener('click', ()=>{
        if(!this.isGo){
            this.isGo = true; 
            this.timerGo(); 
            this.hitGenerator();
        }
        else this.isGo = false; 

    })

    this.updateData = function(){
        let sec = '';
        let min = '';
        let redScore = ''; 
        let greenScore = ''; 

        if(this.sec<10) sec = '0' + this.sec; else if(this.sec>=60) sec = '59'; else sec = this.sec; 
        if(this.min<10) min = '0' + this.min; else if(this.min>=60) min = '59'; else sec = this.sec; 
        
        if(this.redScore<10) redScore = '0' + this.redScore; else if(this.redScore>= 100) redScore = '99'; else redScore = this.redScore;    
        if(this.greenScore<10) greenScore = '0' + this.greenScore; else if(this.greenScore>= 100) greenScore = '99'; else greenScore = this.greenScore;   

        warUiSelectors.timer.innerHTML = `${min}:${sec}`; 
        warUiSelectors.redScore.innerHTML = redScore; 
        warUiSelectors.greenScore.innerHTML = greenScore; 
    }

    this.timerGo = function(){
            let interval = setInterval(()=>{
                this.sec--; 
                if(this.sec<0){
                    this.min--; 
                    this.sec = 59; 
                }
                if(this.sec == 0 && this.min == 0) clearInterval(interval);
                this.updateData(); 
        
                if(!this.isGo) clearInterval(interval);
            },1000)
    }

    this.hitGenerator = function(){
        let sec = Math.floor(Math.random()*100);
        if(sec === 0) Math.floor(Math.random()*100);

        setTimeout(()=>{

            let redA = Math.floor(Math.random()*100);
            let greenA = Math.floor(Math.random()*100);


            if(redA > greenA){
                warUiSelectors.redLamp.style.background = 'red';
                this.sec++; 
                this.redScore++; 
                setTimeout(()=>{
                    warUiSelectors.redLamp.style.background = 'black';
                },1500)
            }

            if(redA < greenA){
                warUiSelectors.greenLamp.style.background = 'green';
                this.sec++;
                this.greenScore++; 
                setTimeout(()=>{
                    warUiSelectors.greenLamp000000.style.background = 'black';
                },1500)
            }

            this.isGo = false;  
        },sec*100)
    };

    this.updateData();
    
}

function OwnPlayer(){
    this.speed = 45; 
    this.reflex = 70; 
    
}

window.onload = warArr.push(new War);