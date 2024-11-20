import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  private readonly TOKEN_KEY = 'token';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    let token : string | null = null

    if (typeof window !== 'undefined') {
      token = localStorage.getItem(this.TOKEN_KEY);
    }

    if(token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(cloned)
    }

    return next.handle(req)
  }
}
