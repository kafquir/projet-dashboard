import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './Dashboard-routing.module';





@NgModule({
    declarations: [DashboardComponent],
    imports: [
        SharedModule,
        RouterModule,
        DashboardRoutingModule 
    
    ]
  })
  export class DashboardModule {}