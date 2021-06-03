import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupby'
})
export class GroupbyPipe implements PipeTransform {

  transform(objects: object[], key: string): any {
    const countedObjects: object[] = [];

    for (const object of objects) {
      const count: any = objects.filter(obj => obj[key] === object[key]).length;

      if (!countedObjects.find(obj => obj[key] === object[key])) {
        countedObjects.push({...object, count});
      }
    }

    return countedObjects;
  }

}
