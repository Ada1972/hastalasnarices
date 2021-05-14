/*FUNCION Y VARIABLES*/
function Promedio(){ 
    var Programacion;
    var Base_de_datos;
    var Entornos_de_desarrollo;
    var Lenguaje_de_marcas;
    var suma;
    var media;

/*CAPTURAR INPUTS*/
Programacion=document.getElementById("Prg");
Base_de_datos=document.getElementById("Bd");
Entornos_de_desarrollo=document.getElementById("Ed");
Lenguaje_de_marcas=document.getElementById("Lm");
Media=document.getElementById("Avg");


console.log(parseFloat(Programacion.value));
console.log(parseFloat(Base_de_datos.value));
console.log(parseFloat(Entornos_de_desarrollo.value));
console.log(parseFloat(Lenguaje_de_marcas.value));

/*CALCULAR LA MEDIA*/
suma=parseFloat(Prg.value)+parseFloat(Bd.value)+parseFloat(Ed.value)+parseFloat(Lm.value);
media=parseFloat(suma.value)/4;

/*RESULTADO POR CONSOLA*/
console.log(parseFloat(suma));
console.log(parseFloat(media));
return false;
}
/*SOLO ME SALE LA SUMA !!!!*/