import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediathequeService } from '../../services/mediatheque.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  logo: string = 'assets/images/Logo.svg'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediathequeService: MediathequeService
  ) { }

  navigateToList(): void {
    this.router.navigate(['/home']);
  }


}