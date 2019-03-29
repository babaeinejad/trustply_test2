import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService, TokenPayload } from 'src/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public auth: AuthenticationService, private router: Router) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl();
  password = new FormControl();

  ngOnInit() {
  }

  signIn() {
    const user: TokenPayload = {
      id: 0,
      email: this.email.value,
      name: '',
      password: this.password.value
    }
    this.auth.login(user).subscribe(
      () => {
        this.router.navigateByUrl('/home')
      },
      err => {
        console.log(err);
      }
    )
  }
}
