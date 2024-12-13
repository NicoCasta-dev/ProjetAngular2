import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediathequeService } from '../services/mediatheque.service';
import { Audiotheque } from '../models/audiotheque';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit{
  audioBook: Audiotheque | null = null;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  isPlaying: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediathequeService: MediathequeService
  ) {}

  ngOnInit(): void {
    console.log('Composant chargé !')
    console.log(this.route.snapshot.paramMap)
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.getAudioBookDetails();
  }

  getAudioBookDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Convertir en nombre
    if (id) {
      this.mediathequeService.getAudioBook(id).subscribe({
        next: (book) => {
          console.log('Livre reçu:', book); // Pour debug
          this.audioBook = book;
        },
        error: (error) => {
          console.error('Erreur détaillée:', error); 
          this.navigateToList();
        }
    });
    } else {
      console.error("ID du livre audio manquant ou invalide dans l'URL");
      this.navigateToList();
    }
  }

  navigateToList(): void {
    this.router.navigate(['/home']);
  }

  togglePlay(): void {
    if (!this.audioPlayer) return;

    const audio = this.audioPlayer.nativeElement;

    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error('Erreur lors de la lecture:', error);
      });
    }

    this.isPlaying = !this.isPlaying;
  }

  onAudioEnded(): void {
    this.isPlaying = false;
  }
}
