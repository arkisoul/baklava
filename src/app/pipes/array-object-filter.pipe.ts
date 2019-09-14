import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayObjectFilter'
})
export class ArrayObjectFilterPipe implements PipeTransform {

    transform(items: any[], filter?: Object, keyString?: string): any {
        if (!items || !filter || !keyString) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item[keyString].indexOf(filter[keyString]) !== -1);
    }

}
