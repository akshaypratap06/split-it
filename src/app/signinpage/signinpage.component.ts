import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SigninComponent } from '../app/signin/signin.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-signinpage',
  standalone: true,
  imports: [NavComponent, SigninComponent, FooterComponent],
  templateUrl: './signinpage.component.html',
  styleUrl: './signinpage.component.css',
})
export class SigninpageComponent {}
