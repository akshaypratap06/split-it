import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true,
})
export class TitlePipe implements PipeTransform {
  transform(value: any): string {
    if (!value || typeof value !== 'string') return value;
    const newValue: string = String(value);
    return newValue
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
