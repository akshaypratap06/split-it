import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitKeyPipe',
  standalone: true,
})
export class SplitKeyPipePipe implements PipeTransform {
  transform(
    object: Record<string, number>
  ): Array<{ person1: string; person2: string; amount: number }> {
    return Object.entries(object).map(([key, value]) => {
      const [person1, person2] = key.split('_');
      return { person1, person2, amount: value };
    });
  }
}
