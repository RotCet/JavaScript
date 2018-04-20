//para nombrar clase se nombra con mayus
class Persona{
    nombre:string;
    apellido:string;
    edad: number;

    saludar():void{
        console.log('Hola mi nombre es:' + this.nombre + ' ' +this.apellido);
    }
}
//tener acceso a las propiedades de la clase y asignarle datos
var estudiante:Persona=new Persona();
estudiante.nombre='Rouse';
estudiante.apellido='KBAE';

estudiante.saludar();
