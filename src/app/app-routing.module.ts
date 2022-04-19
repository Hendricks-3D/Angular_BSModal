import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  { path: '#', component: AppComponent },

  { path: 'carDetails', component: CarDetailsComponent },
  { path: 'comments', component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
