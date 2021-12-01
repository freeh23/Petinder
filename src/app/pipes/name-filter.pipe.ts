import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";
import {filter, map} from "rxjs";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], filterWord: string): unknown {
    filterWord = filterWord.toLowerCase();
    return pets.filter(pet => pet.name.toLowerCase().includes(filterWord));
  }

}
