
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorreioComponent } from './correio/correio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'correio', component: CorreioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
