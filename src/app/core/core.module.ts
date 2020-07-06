import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [NavBarComponent,HeaderComponent],
    imports: [
        SharedModule,
        RouterModule
    
    ]
  })
  export class CoreModule {}