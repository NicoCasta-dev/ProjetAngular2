import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly TOKEN_KEY = 'token';
  
  authStatus = signal<boolean>(this.estConnecte());

  private storageDispo(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getToken(): string | null {
    return this.storageDispo() ? localStorage.getItem(this.TOKEN_KEY): null
  }

  setToken(token: string): void {
    if (this.storageDispo()) {
      localStorage.setItem(this.TOKEN_KEY, token)
      this.authStatus.set(true)
    }
  }

  removeToken(): void {
    if (this.storageDispo()) {
      localStorage.removeItem(this.TOKEN_KEY)
      this.authStatus.set(false)
    }
  }

  estConnecte(): boolean {
    return !!this.getToken()
  }
}