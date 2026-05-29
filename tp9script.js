var juegoSeleccionado = "";

function seleccionarJuego(tarjeta, juego){
    let tarjetas = document.querySelectorAll(".tarjeta");
    for(let i=0; i < tarjetas.length; i++){
        tarjetas[i].classList.remove("seleccionado");
    }
    tarjeta.classList.add("seleccionado");

    juegoSeleccionado=juego;
}
function registrarJuego(){
    let nickname = document.getElementById("nickname").value;
    let edad=document.getElementById("edad").value;
    let codigo=document.getElementById("codigo").value;
    let valido= true;

    document.getElementById("errorNickname").innerHTML="";
    document.getElementById("errorEdad").innerHTML="";
    document.getElementById("errorCodigo").innerHTML="";
    document.getElementById("errorJuego").innerHTML="";

    let regexNickname = /^[A-Za-z0-9]+$/;

    if(!regexNickname.test(nickname) || nickname.length<3){
        document.getElementById("errorNickname").innerHTML="El nickname debe tener mino 3 caracteres"
        valido=false;
    }
    if (isNaN(edad) || edad <=16 || edad == ""){
        document.getElementById("errorEdad").innerHTML="La edad debe ser mayor a 16"
        valido=false;
    }
    if (isNaN(codigo) || codigo.length!=4){
        document.getElementById("errorCodigo").innerHTML="El codigo debe tener 4 numeros "
        valido=false;
    }
    if(juegoSeleccionado===""){
        document.getElementById("errorJuego").innerHTML="Tiene que seleccionar un juego"
        valido=false;
    }
    if(valido){
        alert("Registro completado correctamente");

        document.getElementById("btnPreparacion").style.display="block";
    }
}
function hacerPreguntas(){
    let horas=prompt("¿Cuantas horas por semanas dedicas a jugar?");
    let modalidad= prompt("Preferis jugar solo o en equipo?");
    let rol=prompt("¿Que rol ocupas en tu equipo");
    if(horas=== null){
        horas="No respondio esta pregunta";
    }
    if(modalidad===null){
        modalidad="No respondio esta pregunta";
    }
    if(rol==null){
        rol="no respondio esta pregunta";
    }
    document.getElementById("respuestas").innerHTML=`
        <h3>Respuestas Jugador </h3>
        <p><strong>Horas de juego por semana:</strong>${horas}</p>
        <p><strong>Modalidad preferida:</strong>${modalidad}</p>
        <p><strong>Rol en el equipo:</strong>${rol}</p>
    `;
}