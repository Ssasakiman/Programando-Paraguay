let form = document.getElementById("Calculadora");

const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INS = document.getElementById("instrucciones");
const HR = document.getElementById("hr");
const TIT = document.getElementById("titulomet");
const BOT = document.getElementById("botonsalir");
const MILQ = document.getElementById("milq");
const DOSM = document.getElementById("dosm");

CALCULAR.addEventListener("click", () => {
    const DATO = document.getElementById("peso").value
    if (DATO > 0 && DATO <= 30) {
        INS.style.display = "none";
        ERROR.style.display = "none";
        let flujo =(Holliday(DATO)).toFixed(2);
        let porhora =(flujo/24).toFixed(2);
        let mantenimiento = (porhora*1.5).toFixed(2);
        FLU.innerHTML = "Volumen Diario = " + flujo + " cc";
        HR.innerHTML = "Mantenimiento = " + porhora + " cc/hr";
        MAN.innerHTML = "m+m/2= "+ mantenimiento + " cc/hr";
        TIT.innerHTML = "Método Hollyday - Segar" 
        FLU.style.display = "block";
        MAN.style.display = "block";
        HR.style.display = "block";
        TIT.style.display = "block";
        BOT.style.display = "block";
        MILQ.style.display = "none"
        DOSM.style.display = "none"
    }
    else if(DATO>30) {
        INS.style.display = "none";
        ERROR.style.display = "none";
        MILQ.style.display = "block";
        DOSM.style.display = "block";
        TIT.style.display = "block";
        BOT.style.display = "block";
        FLU.style.display = "none";
        MAN.style.display = "none";
        HR.style.display = "none";
        TIT.innerHTML = "Método Superficie Corporal"
    }
    else {
        ERROR.style.display = "block";
        FLU.style.display= "none";
        MAN.style.display = "none";
        HR.style.display = "none";
        INS.style.display = "block";
        TIT.style.display = "none";
        BOT.style.display = "none";
        MILQ.style.display = "none"
        DOSM.style.display = "none"
    }
})



BOT.addEventListener("click", () => {
        ERROR.style.display = "none";
        FLU.style.display= "none";
        MAN.style.display = "none";
        HR.style.display = "none";
        INS.style.display = "block";
        TIT.style.display = "none";
        BOT.style.display = "none";
        MILQ.style.display = "none"
        DOSM.style.display = "none"
})

MILQ.addEventListener("click", () => {
    const DATO = document.getElementById("peso").value
    if(DATO>30) {
        INS.style.display = "none";
        ERROR.style.display = "none";
        let flujo =SuperficieCorporal(DATO);
        let flujoa = (flujo*1500).toFixed(2);
        let porhoraa = ((flujoa*1)/24).toFixed(2);
        let mantenimientoa = (porhoraa*1.5).toFixed(2);
        FLU.innerHTML = "Volumen Diario = " + flujoa + " cc";
        HR.innerHTML = "Mantenimiento = " + porhoraa + " cc/hr";
        MAN.innerHTML = "m+m/2 = " + mantenimientoa + " cc/hr";
        TIT.innerHTML = "Método Superficie Corporal x1500"
        FLU.style.display = "block";
        MAN.style.display = "block";
        HR.style.display = "block" ;
        MILQ.style.display = "none";
        DOSM.style.display = "none";
        TIT.style.display = "block";
        BOT.style.display = "block";
        }
})

DOSM.addEventListener("click", () => {
    const DATO = document.getElementById("peso").value
    if(DATO>30) {
        INS.style.display = "none";
        ERROR.style.display = "none";
        let flujo =SuperficieCorporal(DATO);
        let flujob = (flujo*2000).toFixed(2);
        let porhorab = ((flujob*1)/24).toFixed(2);
        let mantenimientob = (porhorab*1.5).toFixed(2);
        FLU.innerHTML = "Volumen Diario = " + flujob + " cc";
        HR.innerHTML = "Mantenimiento = " + porhorab + " cc/hr";
        MAN.innerHTML = "m+m/2 = " + mantenimientob + " cc/hr";
        TIT.innerHTML = "Método Superficie Corporal x2000"
        FLU.style.display = "block";
        MAN.style.display = "block";
        HR.style.display = "block";
        MILQ.style.display = "none";
        DOSM.style.display = "none";
        TIT.style.display = "block";
        BOT.style.display = "block";
        }
})

function Holliday(peso){
    let flujo = 0;

    if (peso>20 && peso<=30){
        flujo= 1500+((peso-20)*20);
    }
    else if (peso>10 && peso<=20){ 
        flujo = 1000+((peso-10)*50);
    }
    else if (peso>0 && peso<=10){
        flujo = peso*100; 
    }
    return (flujo);
}

function SuperficieCorporal(peso){
    let flujo = 0;

    if(peso>30){
       flujo = ((4*peso)+7)/((peso*1)+90)
    } 

    return (flujo);
}