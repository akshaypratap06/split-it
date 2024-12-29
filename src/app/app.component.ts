import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './finalComponent/main/main.component';

import { LoghomeComponent } from './app/loghome/loghome.component';
import { FeaturesComponent } from './finalComponent/features/features.component';
import { FooterComponent } from './finalComponent/footer/footer.component';
import { HomeComponent } from './finalComponent/home/home.component';
import { NavComponent } from './finalComponent/nav/nav.component';
import { SigninComponent } from './finalComponent/signInOutPage/signin/signin.component';
import { SignupComponent } from './finalComponent/signInOutPage/signup/signup.component';

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
