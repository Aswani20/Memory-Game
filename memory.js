var cards =document.querySelectorAll('.card');
var checkCard = false;
var lockBord = false;
var fCard,sCard;
function flipCard(){
    if(lockBord) return;
    if(this === fCard) return;
    this.classList.add('flip')
    if(!checkCard){
        checkCard= true;
        fCard = this;
        return;
    }
    sCard=this;
    findMatch(); 
}

function findMatch(){
    var isMatch=fCard.dataset.framework === sCard.dataset.framework;
    isMatch? showCards() : hideCards();
}
function showCards(){
    fCard.removeEventListener('click', flipCard);
    sCard.removeEventListener('click', flipCard);
    resetBoard();
}
function hideCards(){
    lockBord = true
    setTimeout(()=>{
        fCard.classList.remove('flip');
        sCard.classList.remove('flip');

        resetBoard();
    },1500);
}
function resetBoard(){
    [checkCard,lockBord]=[false,false];
    [fCard,sCard] = [null,null];
}
(function shuffle(){
    cards.forEach(cardn=>{
        var randPo=Math.floor(Math.random()*16)
        cardn.style.order=randPo;
    });
})();



// var myBtn=document.querySelector(".btn");
// myBtn.onclick=function shuffle(){
//     cards.forEach(cardn=>{
//         var randPo=Math.floor(Math.random()*16)
//         cardn.style.order=randPo;
//     });
// }


cards.forEach(cardn => cardn.addEventListener('click',flipCard) )