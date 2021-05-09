const p1btn = document.querySelector("#p1btn")
const p2btn = document.querySelector("#p2btn")
const reset = document.querySelector("#reset")
const winGetScore = document.querySelector('#score')
const s1 = document.querySelector("#s1")
const s2 = document.querySelector("#s2")
let p1Score=0;
let p2Score=0;
let isGameOver = false;
let winScore = 5;

winGetScore.addEventListener('change',function(evt){
    winScore = parseInt(this.value);
    resetAll();

})


p1btn.addEventListener('click',function(evt){
    if(!isGameOver){
    s1.innerText = ++p1Score;
    }
    if(p1Score===winScore){
        isGameOver = true;
        s1.classList.add('has-text-success')
        s2.classList.add('has-text-danger')
        p1btn.disabled = true;
        p2btn.disabled = true;
        }

})
p2btn.addEventListener('click',function(evt){
    if(!isGameOver){
        s2.innerText = ++p2Score;
        }
        if(p2Score===winScore){
            isGameOver = true;
            s2.classList.add('has-text-success')
            s1.classList.add('has-text-danger')
            p1btn.disabled = true;
            p2btn.disabled = true;
            }
    
    })


reset.addEventListener('click',resetAll)

function resetAll(){
    isGameOver = false;
    p1Score=0;
    p2Score=0;
    s2.innerText =0;
    s1.innerText =0; 
    s2.classList.remove('has-text-success','has-text-danger')
    s1.classList.remove('has-text-danger','has-text-success')
    p1btn.disabled = false;
    p2btn.disabled = false;
}
