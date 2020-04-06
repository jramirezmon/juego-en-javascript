//ctrl + f5 = reiniciar todo borrando el caché


document.addEventListener('DOMContentLoaded', function(){
    inicio.iniciarJuego();
}, false);
var inicio = {
    iniciarJuego: function(){
        console.log("Equisdé");
        dimensiones.iniciar();
        var r = new Rectangulo(10 , 10 , 100 , 100);
        cicloPrincipal.iterar();
    }
};