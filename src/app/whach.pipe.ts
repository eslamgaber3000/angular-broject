import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whach'
})
export class WhachPipe implements PipeTransform {

  transform(title:string):string {
    return `watch ${title}`;
  }

}
