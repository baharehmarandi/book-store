import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToTimes'
})
export class NumToTimesPipe implements PipeTransform {

  transform(value: number): string {


    const hours: number = Math.floor((value % 3600) / 60);
    const minutes: number = value % 60;

    return `${this.formatValue(hours)} : ${this.formatValue(minutes)}`;
  }

  private formatValue(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
