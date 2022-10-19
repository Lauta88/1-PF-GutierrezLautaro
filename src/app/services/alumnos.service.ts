import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private listaAlumnos : Alumno[] = [

    {

        nombre: 'Jose',
        apellido: 'Perez',
        edad: 22,
        curso: 'Angular',
        inicioDeCurso: new Date(2022, 11, 23)
    },

    {
      nombre: 'carlos',
      apellido: 'dominguez',
      edad: 25,
      curso: 'Angular',
      inicioDeCurso: new Date(2022, 12, 4)
    },

    {

      nombre: 'Sofia',
      apellido: 'Ferrari',
      edad: 28,
      curso: 'ReactJs',
      inicioDeCurso: new Date(2022, 1, 21)
    }
]


  constructor() { }





  obtenerAlumnos() {
 return this.listaAlumnos.slice();
  }

  eliminarAlumno(index: number) {
    this.listaAlumnos.splice(index, 1)
  }

  agregarAlumno(alumno: Alumno) {
    this.listaAlumnos.unshift(alumno);
  }

}


