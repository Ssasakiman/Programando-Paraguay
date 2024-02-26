let form = document.getElementById("Calculadora");

const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INS = document.getElementById("instrucciones");
const HR = document.getElementById("hr");
const TIT = document.getElementById("titulomet");
const BOT = document.getElementById("botonsalir");

CALCULAR.addEventListener("click", () => {
    const DATO = document.getElementById("peso").value
    if (DATO > 0 && DATO <= 30) {
        INS.style.display = "none";
        ERROR.style.display = "none";
        let flujo =(Holliday(DATO)).toFixed(2);
        let porhora =(flujo/24).toFixed(2);
        let mantenimiento = (porhora*1.5).toFixed(2);
        FLU.innerHTML = "Volúmen Diario = " + flujo + " cc";
        HR.innerHTML = "Mantenimiento = " + porhora + " cc/hr";
        MAN.innerHTML = "m+m/2= "+ mantenimiento + " cc/hr";
        TIT.innerHTML = "Método Hollyday - Segar" 
        FLU.style.display = "block";
        MAN.style.display = "block";
        HR.style.display = "block";
        TIT.style.display = "block";
        BOT.style.display = "block";
    }
    else if(DATO>30) {
        INS.style.display = "none";
        ERROR.style.display = "none";
        let flujo =SuperficieCorporal(DATO);
        let flujoa = (flujo*1500).toFixed(2);
        let flujob = (flujo*2000).toFixed(2);
        let porhoraa = ((flujoa*1)/24).toFixed(2);
        let porhorab = ((flujob*1)/24).toFixed(2);
        let mantenimientoa = (porhoraa*1.5).toFixed(2);
        let mantenimientob = (porhorab*1.5).toFixed(2);
        FLU.innerHTML = "I. Volúmen Diario (* 1500) = " + flujoa + " cc" + "<br>&nbsp;<br>" + "II. Volúmen Diario (* 2000) = " + flujob + " cc";
        HR.innerHTML = "I. Mant. (* 1500) = " + porhoraa + " cc/hr" + "<br>&nbsp;<br>" + "II. Mant. (* 2000) = " + porhorab + " cc/hr";
        MAN.innerHTML = "I. m+m/2 (*1500) = " + mantenimientoa + " cc/hr" + "<br>&nbsp;<br>" + "II. m+m/2 (*2000) = "+ mantenimientob + " cc/hr";
        TIT.innerHTML = "Método Superficie Corporal"
        FLU.style.display = "block";
        MAN.style.display = "block";
        HR.style.display = "block";
        TIT.style.display = "block";
        BOT.style.display = "block";
    }
    else {
        ERROR.style.display = "block";
        FLU.style.display= "none";
        MAN.style.display = "none";
        HR.style.display = "none";
        INS.style.display = "block";
        TIT.style.display = "none";
        BOT.style.display = "none";
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
})

function Holliday(peso){
    let resto = peso;
    let flujo = 0;

    if (resto>20 && resto<=30){
        let aux = resto-20;
        flujo += aux*20;
        resto -= aux;
    }
    if (resto>10 && resto<=20){ 
        let aux = resto - 10;
        flujo += aux*50;
        resto -= aux;
    }
    if (resto>0 && resto<=10){
        flujo += resto*100;
    }
    return (flujo);
}

function SuperficieCorporal(peso){
    let resto = peso;
    let flujo = 0;

    if(resto>30){
       flujo = ((4*resto)+7)/((resto*1)+90)
    } 

    return (flujo);
}