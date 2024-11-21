import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { Utilisateur } from '../../models/utilisateur.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _auth: AuthService,
    private _session: SessionService
  ) {
    this.registerForm = this._formBuilder.group({
      nom: ['', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(50)
      ]],
      prenom: ['', [
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
      avatar: [''] // Optionnel
    });
  }

  onSubmit(): void {
    if(this.registerForm.invalid) {
      return;
    }

    const utilisateur: Utilisateur = this.registerForm.value;

    this._auth.register(utilisateur).subscribe({
      next: (reponse: any) => {
        console.log('Utilisateur enregistré', reponse);
        // Vérif si  backend renvoie un token lors de l'inscription
        if (reponse.token) {
          this._session.setToken(reponse.token);
        }
        console.log('Inscription réussie');
        this._router.navigate(['/accueil']);
      },
      error: (error: any) => {
        console.error('Erreur d\'inscription', error);
      }
    });
  }
}


