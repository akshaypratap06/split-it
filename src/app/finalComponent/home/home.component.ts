import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { MainComponent } from '../main/main.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturesComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
