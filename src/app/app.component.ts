import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './app/signin/signin.component';
import { SignupComponent } from './app/signup/signup.component';
import { LoghomeComponent } from './app/loghome/loghome.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    MainComponent,
    FeaturesComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    LoghomeComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Splitter';
}
