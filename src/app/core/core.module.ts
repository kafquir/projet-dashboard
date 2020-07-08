import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [HeaderComponent],
    imports: [
        SharedModule,
        RouterModule
    
    ]
  })
  export class CoreModule {}