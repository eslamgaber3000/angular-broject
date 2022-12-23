import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searsh'
})
export class SearshPipe implements PipeTransform {

  transform(moveis:any[],term:string):any[] {
    return moveis.filter((movei)=>movei.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
