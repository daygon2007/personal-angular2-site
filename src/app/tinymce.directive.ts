import { Directive } from '@angular/core';
declare var tinymce: any;

@Directive({
  inputs: ['tinymce'],
  selector: '[tinymce]'
})
export class Tinymce {

  constructor() {
    
  }

}
