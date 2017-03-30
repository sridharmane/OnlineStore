import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'string') {
      return value.split(' ').map(word => { return word.charAt(0).toUpperCase() + word.substr(1); }).join(' ');
    } else {
      return null;
    }
  }

}
