import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "maxNumber"
})
export class MaxNumberPipe implements PipeTransform {
  transform(arr: number[]): number {
    return Math.max(...arr);
  }
}
