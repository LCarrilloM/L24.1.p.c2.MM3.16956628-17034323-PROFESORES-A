/* 
En la Universidad se le paga a cada profesores un bono, sin embargo 
si es personal fijo tiene un sueldo y si es contratado tiene cantidad 
de horas, donde cada una se paga a $10. Considere que a todos los 
profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado 
heredan de la clase Cl_profesor.
Haga un programa que lea los datos de un profesor fijo y reporte su 
ingreso total.

Ejemplos de la corrida:

Nombre del profesor fijo: Carlos
Monto del bono: $25
Monto del sueldo: $100
Ingreso total del profesor Carlos: $125

Nombre del profesor fijo: Carolina
Monto del bono: $40
Monto del sueldo: $90
Ingreso total del profesor Carolina: $130
*/

import Cl_profesor from "./Cl_profesor.js";
import Cl_fijo from "./Cl_fijo.js";
import Cl_contratado from "./Cl_contratado.js";

export default class Cl_main{
    constructor (){
        let profesor = new Cl_profesor ();
        let fijo1 = new Cl_fijo ("Carlos", 25,100);
        let fijo2 = new Cl_fijo ("Carolina", 40, 90);
        let contratado = new Cl_contratado ();
        
    }
}

profesor.procesarfijo(fijo1);
profesor.procesarfijo(fijo2);

let salida=document.getElementById("salida");

salida.inner+=`<br> Nombre del profesor: ${fijo1.nombre}`;
salida.inner+=`<br> Monto del Bono $: ${fijo1.bono}`;
salida.inner+=`<br> Monto del Sueldo $: ${fijo1.Sueldo}`;
salida.inner+=`<br> Nombre del profesor:${fijo1.nombre}`;
salida.innerHTML+=`<br> Ingreso Total del profesor ${fijo1.nombre} : $ ${fijo1.IngesoTotal()}`;

salida.inner+=`<br> Nombre del profesor: ${fijo2.nombre}`;
salida.inner+=`<br> Monto del Bono $: ${fijo2.bono}`;
salida.inner+=`<br> Monto del Sueldo $: ${fijo2.Sueldo}`;
salida.inner+=`<br> Nombre del profesor:${fijo2.nombre}`;
salida.innerHTML+=`<br> Ingreso Total del profesor ${fijo2.nombre} : $ ${fijo2.IngesoTotal()}`;