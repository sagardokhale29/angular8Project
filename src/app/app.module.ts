import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogElementsExampleComponent } from './dialog-elements-example/dialog-elements-example.component';
import { DialogElementsExampleDialog } from './dialog-elements-example/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from './dialog-elements-example/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    DialogElementsExampleComponent,
    DialogElementsExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
