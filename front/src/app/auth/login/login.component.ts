import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

// test
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _auth: AuthService,
    private _session: SessionService
  ) {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(this.loginForm.invalid) {
      return;
    }

    this._auth.login(this.loginForm.value).subscribe({
      next: (reponse) => {
        console.log(reponse);
        this._session.setToken(reponse.token);
        console.log('Connexion réussie');
        this._router.navigate(['/accueil']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
