import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
    schemas:  [  ],
    declarations: [],
    imports: [
     
      FormsModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
     
     
    ], 
    exports: [
     
      FormsModule,
     MatDialogModule,
     MatIconModule,
     MatSidenavModule,
    
      
    ]
  })
  export class SharedModule { }