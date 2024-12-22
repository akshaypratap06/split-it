import { Component } from '@angular/core';
import { GroupsComponent } from '../../groups/groups.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-loghome',
  standalone: true,
  imports: [GroupsComponent, DashboardComponent],
  templateUrl: './loghome.component.html',
  styleUrl: './loghome.component.css',
})
export class LoghomeComponent {}
