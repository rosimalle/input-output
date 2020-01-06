import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpp'
})
export class FilterPipe implements PipeTransform {

  transform(storedata , filtering): any {
    let con = e => e.firstname.toLowerCase().search(filtering.toLowerCase())>-1
    if(!filtering)
    return storedata
     return storedata.filter(con)
  }

}
