import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceHyphen'
})
export class SpaceHyphenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) 
    return value.replace(/ /g, "-");
  }

}
