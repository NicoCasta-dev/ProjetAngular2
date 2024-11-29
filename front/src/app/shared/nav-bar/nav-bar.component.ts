import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediathequeService } from '../../services/mediatheque.service';
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/auth.service';
import { Utilisateur } from '../../models/utilisateur.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  logo: string = 'assets/images/Logo.svg';
  currentUser: Utilisateur | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediathequeService: MediathequeService,
    private sessionService: SessionService,
    private authService: AuthService
  ) { this.loadUserInfo(); }

  get isLoggedIn(): boolean {
    return this.sessionService.authStatus();
  }

  private loadUserInfo(): void {
    if (this.isLoggedIn) {
      const userData = localStorage.getItem('userData');
      if (userData) {
        this.currentUser = JSON.parse(userData);
      }
    }
  }

  logout(): void {
    this.sessionService.removeToken();
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  navigateToList(): void {
    this.router.navigate(['/home']);
  }
}