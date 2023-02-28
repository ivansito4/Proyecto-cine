import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPeliculas = [];
    for (const pelicula of value) {
      if (pelicula.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPeliculas.push(pelicula);
      };
    };
    return resultPeliculas;
  }

}
