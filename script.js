let b = document.getElementById("botonPato");
let c = document.getElementById("ModOscuro");
/*b.addEventListener('click',function (){
    alert("Hola Pato")
})*/
b.addEventListener('click',function (){
    window.location.href = 'mainpage.html'
})

c.addEventListener('click', function (){
    document.body.classList.toggle("modoOscuro")
})