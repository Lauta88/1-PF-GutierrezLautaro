import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

form: FormGroup;


  constructor(private fb:FormBuilder, private alumnoService: AlumnosService) {

    this.form = this.fb.group({

      nombre:["", Validators.required],
      apellido:["", Validators.required],
      edad:["", Validators.required,],
      curso:["", Validators.required],
      inicioDeCurso:["", Validators.required],

    })


  }

  ngOnInit(): void {


  }



  enviarAlumno() {

    const alumno: Alumno = {

      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      curso: this.form.value.curso,
      inicioDeCurso: this.form.value.inicioDeCurso
    }

    this.alumnoService.agregarAlumno(alumno)
  }

}
