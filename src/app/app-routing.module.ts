import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { DashboardComponent } from './Dashboard/dashboard.component';


const routes: Routes = [ 
  
  { 
    path : '', component : HeaderComponent , children : [
  {path : 'dashboard', loadChildren : './Dashboard/Dashboard.module#DashboardModule'},
    ]
  },
  { path : 'nav', component : NavBarComponent },

   //{path : 'dashboard',component :DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



