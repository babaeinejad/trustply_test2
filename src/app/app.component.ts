import { Component } from '@angular/core';
import { AuthenticationService } from 'src/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthenticationService, private router: Router) {
    if (auth.isLoggedIn()) {
      this.router.navigateByUrl('/home')
    }
    else
    this.router.navigateByUrl('/signin')
  }
}
