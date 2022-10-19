import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit, DoCheck{



alumnos: Alumno[] = [];




displayedColumns: string[] = ['nombre',  'edad', 'curso', 'inicioDeCurso', 'accion'];
dataSource!: MatTableDataSource<Alumno>

  constructor(private alumnoService: AlumnosService) {

   }

  ngOnInit(): void {
    this.cargarAlumnos()
  }


  ngDoCheck(): void {
    this.cargarAlumnos()
  }
  eliminarAlumnos(index: number){
    this.alumnoService.eliminarAlumno(index)
    this.cargarAlumnos()

  }


  cargarAlumnos(){
    this.alumnos = this.alumnoService.obtenerAlumnos();
    this.dataSource = new MatTableDataSource(this.alumnos)
  }



}
