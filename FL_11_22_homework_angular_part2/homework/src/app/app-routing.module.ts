import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewslineComponent } from './components/newsline/newsline.component';
import { NewslinesComponent } from './components/newslines/newslines.component';


const routes: Routes = [
  { path: '', redirectTo: '/newslines', pathMatch: 'full' },
  {
    path: 'newslines',
    component: NewslinesComponent
  },
  {
    path: 'newslines/:id',
    component: NewslineComponent
  },
  {
    path: 'create-news',
    component: CreateNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
