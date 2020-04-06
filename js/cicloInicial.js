//aps - actualizaciones por segundo
//namespace - espacio de nombres
//main loop - buble principal
//fps - imágenes por segundo

var cicloPrincipal = {
    idEjecucion: null,
    ultimoregistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal){
        cicloPrincipal.idEjecucion = window.requestAnimationFrame(cicloPrincipal.iterar);
        cicloPrincipal.actualizar(registroTemporal);
        cicloPrincipal.dibujar(registroTemporal);

        if(registroTemporal - cicloPrincipal.ultimoregistro > 999){
            cicloPrincipal.ultimoregistro = registroTemporal;
            console.log("APS: " + cicloPrincipal.aps + "   FPS:  " + cicloPrincipal.fps );
            cicloPrincipal.aps = 0;
            cicloPrincipal.fps = 0;
        }
    },
    detener:function(){

    },
    actualizar:function(registroTemporal){
        cicloPrincipal.aps++;
    },
    dibujar:function(registroTemporal){
        cicloPrincipal.fps++;
    }
};