var navbar=document.querySelector('.navbar')
window.addEventListener('scroll',function(){
    let windowScroll =window.scrollY
    if(windowScroll > 500){
        navbar.style.top ='0%'
        navbar.style.background ='black'
        navbar.style.position ='fixed'
        navbar.style.width ='100%'
        
    }
    else if (windowScroll < 100)
    {
        navbar.style.background ='none'
        navbar.style.top ='50px'
    }
})



//////////////////////////////////////////////
// var cardli4=document.querySelector('.cardli4')
// var card55=document.querySelector('.card55')
// var card56=document.querySelector('.card56')
// var card57=document.querySelector('.card57')
// var card58=document.querySelector('.card58')
// var card1text=document.querySelector('.card1-text')
// var card2text=document.querySelector('.card2-text')
// card55.addEventListener('click' ,function () {
//     cardli4.style.display="flex"
//     card1text.style.top='230px'
//     card2text.style.top='230px'
// })

// card56.addEventListener('click' ,function () {
//     cardli4.style.display="flex"
//     card1text.style.top='230px'
//     card2text.style.top='230px'
// })

// card57.addEventListener('click' ,function () {
//     cardli4.style.display="flex"
//     card1text.style.top='230px'
//     card2text.style.top='230px'
// })

// card58.addEventListener('click' ,function () {
//     cardli4.style.display="flex"
//     card1text.style.top='230px'
//     card2text.style.top='230px'
// })