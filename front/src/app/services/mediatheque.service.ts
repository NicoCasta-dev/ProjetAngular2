import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audiotheque } from '../models/audiotheque';

@Injectable({
  providedIn: 'root'
})
export class MediathequeService {
  private apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  getAllAudioBooks(): Observable<Audiotheque[]> {
    return this.http.get<Audiotheque[]>(`${this.apiUrl}/livres_audio/`);
  }

  getAudioBook(id: number): Observable<Audiotheque> {
    return this.http.get<Audiotheque>(`${this.apiUrl}/livres_audio/${id}/`);
  }

  getAudioBooksByName(name: string): Observable<Audiotheque[]> {
    return this.http.get<Audiotheque[]>(`${this.apiUrl}/livres_audio?nom=${name}`);
  }

  getNewAudioBooks(): Observable<Audiotheque[]> {
    return this.http.get<Audiotheque[]>(`${this.apiUrl}/livres_audio/nouveautes/`);
  }
  
  getMostListenedAudioBooks(): Observable<Audiotheque[]> {
    return this.http.get<Audiotheque[]>(`${this.apiUrl}/livres_audio/plus_ecoutes/`);
  }
}
