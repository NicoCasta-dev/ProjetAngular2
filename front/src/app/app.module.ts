import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { InterceptorService } from './services/interceptor.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
