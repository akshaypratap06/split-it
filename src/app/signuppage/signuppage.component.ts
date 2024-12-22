import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SignupComponent } from '../app/signup/signup.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-signuppage',
  standalone: true,
  imports: [FooterComponent, SignupComponent, NavComponent],
  templateUrl: './signuppage.component.html',
  styleUrl: './signuppage.component.css',
})
export class SignuppageComponent {}
