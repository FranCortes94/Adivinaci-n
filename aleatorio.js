//zona variables
var Numero=Math.floor((Math.random()*100)+1);
var Nrespuestas=0;
var intentos="";
var respuestas="";

//zona funciones
function Desabilitar(){
        document.getElementById("eleccion").disabled=true;
	    document.getElementById("eleccion").innerHTML="";
        }//Con esto impido que cambie el número de intentos.

function Validador (f){
        return !isNaN(parseFloat(f)) && isFinite(f);
        }//Aquí valido que sea un número.

function Adivinar(){
intentos=document.getElementById("intentos").value;
if(document.getElementById("intentos").disabled==false){
    if(Validador(intentos) && intentos>0){
		document.getElementById("intentos").disabled=true;
        document.getElementById("eleccion").disabled=false;
        document.getElementById("eleccion").focus();
		/*Comenzamos, deshabilito la lista, y activamos y establezco el 
		foco sobre el input de las respuestas*/
    }
}else
respuestas=document.getElementById("respuestas").innerHTML;
 
        if(Nrespuestas<intentos){
            var eleccion=document.getElementById("eleccion").value; //Tomo el valor introducido.
            if(Validador(eleccion) && eleccion>0 && eleccion<100){
                Nrespuestas+=1;
				
             if(eleccion>Numero){
                respuestas+="<br>"+eleccion+" Pista: Es un  número menor"; //Si es un número menor introducido muestra esto.
                document.getElementById("eleccion").focus();
                }else if(eleccion<Numero){
                    respuestas+="<br>"+eleccion+" Pista: Es un número mayor"; //Si es un número mayor introducido muestra esto.
                    document.getElementById("eleccion").focus();
                }else{
                    respuestas+="<br><span class='Has ganado'> El número es correcto: "+eleccion+"</span>";
					//Si el usuario gana muestra esto.
                    Desabilitar()
                    }
                     document.getElementById("eleccion").value="";
            }else
               respuestas+="<br><span class='Error'> Solo se admiten valores numéricos y que no sean menores que 0 ni mayores que 100</span>";
                 //Si el usuario introduce datos erroneos muestra esto.
        }else{
            respuestas+="<br><span class='Has perdido'> El número de intentos, ha sido superado la respuesta es: "+Numero+"</span>";
			 //Si el usuario introduce datos erroneos muestra eso.
            Desabilitar() 
             }
            document.getElementById("respuestas").innerHTML=respuestas;
            return false;
            }