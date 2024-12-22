import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FeaturesComponent } from '../features/features.component';
import { MainComponent } from '../main/main.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, FeaturesComponent, MainComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
