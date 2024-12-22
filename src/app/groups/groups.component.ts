import { Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent {
  arr: number[] = [1, 2, 3, 4, 5];
}
