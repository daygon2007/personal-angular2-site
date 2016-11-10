import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    // Check if Search Term is Undefined
    if (term === undefined) return ninjas;
    //return updated ninjas array
    return ninjas.filter(function(ninja){
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
