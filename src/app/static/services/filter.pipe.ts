import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../models/models';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {
    transform(value: Employee[], filterBy: string): Employee[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((fisrtname: Employee) =>
        
        fisrtname.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
        
        

    }
    
}








