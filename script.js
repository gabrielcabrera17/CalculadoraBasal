

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const FLUJO = document.getElementById('flun');
const RECARGAR = document.getElementById("reload");


CALCULAR.addEventListener('click', ()=>{
    const DATO = document.getElementById('peso').valueAsNumber
    function calcFlujo(DATO) {
        const tope_1 = 10;
        const tope_2 = 20;
        
      
        if (DATO>=20 && DATO<=30 ) {
             franja_1 = tope_1 * 100;
             franja_2 = ( tope_2 - tope_1) * 50;
             franja_3 = (DATO - tope_2)*20;
             volumen_diario = franja_1 + franja_2 + franja_3;

        }else if (DATO>=10 && DATO<=20) {
            franja_1 = tope_1 * 100;
            franja_2 = (tope_2 - DATO) * 50;
            volumen_diario = franja_1 + franja_2;
        }else if(DATO >0 && DATO <=10){
            volumen_diario = DATO * 100;
        } 
        else if(DATO > 30){
            superfice_corporal = (( DATO*4 )+7)/( DATO+90 );
            volumen_diario = superfice_corporal * 1500;
          
        }
        volumen_diario = Number(volumen_diario.toFixed(0));
        return volumen_diario;
    }

    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let flujo_horario = flujo/24;
        let flujo_horario_man = flujo/24;
        flujo_horario = Math.round(flujo_horario);
        let mantenimiento = (flujo_horario_man)*1.5; 
        FLU.innerHTML = 'volumen diario: ' + flujo +'cc'; 
        FLUJO.innerHTML = 'mantenimiento: '+flujo_horario + ' cc/hr';
        mantenimiento = Math.round(mantenimiento);
        MAN.innerHTML = 'm+m/2: ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        RECARGAR.style.display = 'none';
        console.log(flujo);

    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        RECARGAR.style.display = 'block';
    }
    
})
RECARGAR.addEventListener("click",reload);
function reload(){
   location.reload();
}

