import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';


const routes: Routes = [ 
  
  { path : 'header', component : HeaderComponent },
  { path : 'nav', component : NavBarComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



