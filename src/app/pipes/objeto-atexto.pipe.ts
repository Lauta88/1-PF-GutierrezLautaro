import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumnos';

@Pipe({
  name: 'objetoAtexto'
})
export class ObjetoAtextoPipe implements PipeTransform {

  transform(value: Alumno, ...args: string[]): string {


    return String(value.nombre+" "+value.apellido);
  }

}
