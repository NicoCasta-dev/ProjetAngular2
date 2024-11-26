import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { Utilisateur } from '../../models/utilisateur.model';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  serverErrorMessage: string | null = null;


  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _auth: AuthService,
    private _session: SessionService
  ) {
    this.registerForm = this._formBuilder.group({
      last_name: ['', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(50)
      ]],
      first_name: ['', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(50)
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8)
      ]],
      password_confirm: ['', [
        Validators.required, 
        Validators.minLength(8)
      ]],
    });
  }

  onSubmit(): void {
    if(this.registerForm.invalid) {
      return;
    }
    this.serverErrorMessage = null;

    this._auth.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log('Inscription réussie', response);
        this._router.navigate(['/accueil']);
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}


