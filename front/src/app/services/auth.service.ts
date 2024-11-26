import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/utilisateur/';

  constructor(private http: HttpClient) { }

  login(user: Utilisateur) {
    return this.http.post<any>(this.apiUrl + 'login/', user);
  }

  register(user: Utilisateur) {
    return this.http.post<any>(this.apiUrl + 'register/', user);
  }
}
