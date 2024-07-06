import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;


  constructor(private authService: AuthService,
              private router: Router,
              private fb :FormBuilder
    ) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password :['', [Validators.required]],
      });
  }
  ngOnInit(): void {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.getRawValue());
    }
  }

  registrate(): void {
    this.router.navigate(['auth/registrate']);
  }
}
