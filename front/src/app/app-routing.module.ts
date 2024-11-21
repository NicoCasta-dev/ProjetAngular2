import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'livres_audio/:id', component: BookDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
