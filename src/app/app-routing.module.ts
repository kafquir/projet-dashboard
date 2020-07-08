import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { DashboardComponent } from './Dashboard/dashboard.component';


const routes: Routes = [ 
  
  { 
    path : '', component : HeaderComponent , children : [
  {path : 'dashboard', loadChildren : './Dashboard/dashboard.module#DashboardModule'},
    ]
  },

  //{path : 'dashboard',component :DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



