//ctrl + f5 = reiniciar todo borrando el caché


document.addEventListener('DOMContentLoaded', function(){
    inicio.iniciarJuego();
}, false);
var inicio = {
    iniciarJuego: function(){
        console.log("Equisdé");
        dimensiones.iniciar();
        inicio.recargarTiles();
        cicloPrincipal.iterar();
    },
    recargarTiles: function(){
        document.getElementById("juego").innerHTML = "";
        for (var y=0; y < dimensiones.obtenerTilesVerticales(); y++){
            for (var x=0; x < dimensiones.obtenerTilesHorizontales(); x++){
                var r = new Rectangulo(x * dimensiones.ladoTiles,y * dimensiones.ladoTiles,dimensiones.ladoTiles,dimensiones.ladoTiles);
            }
        }
    }
};