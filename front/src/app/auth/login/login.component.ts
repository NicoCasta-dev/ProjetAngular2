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
  loginForm: FormGroup;
  serverErrorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private session : SessionService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    // Réinitialisation du message d'erreur à chaque tentative
    this.serverErrorMessage = null;

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.session.setToken(response.access);
        if (response.user) {
          localStorage.setItem('userData', JSON.stringify(response.user));
        }
        console.log('Connexion réussie', response);
        this.router.navigate(['/home'])
      },
      error: (error) => {
        // Gestion de l'erreur en fonction de la réponse de l'API
        if (error.status === 401) {
          this.serverErrorMessage = "Nom d'utilisateur ou mot de passe incorrect.";
        } else if (error.status === 400) {
          this.serverErrorMessage = "Veuillez vérifier vos informations.";
        } else {
          this.serverErrorMessage = "Une erreur est survenue. Veuillez réessayer.";
        }
      }
    });
  }
}