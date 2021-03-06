import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const Image of value) {
      if (Image.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(Image);
      };
    };
    return resultPosts;
  }


}