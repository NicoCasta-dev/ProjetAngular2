import { Component, OnInit } from '@angular/core';
import { Audiotheque } from '../models/audiotheque';
import { MediathequeService } from '../services/mediatheque.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  audiotheque: Audiotheque[] = []
  filteredAudiotheque: Audiotheque[] = []
  loading = false;
  error = '';
  searchQuery: string = '';

  constructor(
    private mediathequeService: MediathequeService, 
    public readonly router: Router) {}

  ngOnInit(): void {
    this.loadAudiotheque();
  }

  loadAudiotheque(): void {
    this.loading = true;
    this.mediathequeService.getAllAudioBooks().subscribe({
      next: (books) => {
        console.log('Livres reçus:', books); // Pour vérifier la structure des données
        this.audiotheque = books;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.loading = false;
      }
    });
  }

  searchBooks(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredAudiotheque = this.audiotheque;
    } else {
      this.filteredAudiotheque = this.audiotheque.filter((book) => {
        return book.titre.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
}
