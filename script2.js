let c= document.getElementById("Back");
let d = document.getElementById("ModNegro");
let e=document.getElementById("compra")
c.addEventListener('click', function (){
    window.location.href = 'store.html';

})
d.addEventListener('click', function (){
    document.body.classList.toggle("modoBlack")
})

e.addEventListener('click', function(){
    window.location.href = 'store.html'
})
