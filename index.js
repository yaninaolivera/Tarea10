/* Crear una clase Alumno con los atributos: código, nombre, nota1, nota2, nota3 y nota4; y las operaciones: promedio (), 
condicion () y obsequio (). Para calcular el promedio considere la siguiente fórmula:
PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”. */

class Alumno{
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo
        this.nombre = nombre
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4
    }

    promedio(){
        return this.nota1*0.15 + this.nota2*0.20 + this.nota3*0.25 + this.nota4*0.40
    }

    condicion(){
        if (this.promedio() >= 12) {
            return "Esta aprobado"
        }else{
            return "Esta desaprobado"
        }
    }

    obsequio(){
        if (this.promedio() > 17) {
            return "Se le obsequiará una mochila"
        }else{
            return "No se le obsequiará nada"
        }
    }
}

let nuevo_alumno = new Alumno(1, "Yanina", 15, 17, 20, 18)
console.log(nuevo_alumno.promedio())
console.log(nuevo_alumno.condicion())
console.log(nuevo_alumno.obsequio())
console.log(`${nuevo_alumno.nombre} tiene ${nuevo_alumno.promedio()} de promedio, por tanto ${nuevo_alumno.condicion()}. ${nuevo_alumno.obsequio()}.`)