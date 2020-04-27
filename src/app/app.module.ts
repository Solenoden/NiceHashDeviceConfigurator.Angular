import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {UploadConfigFileComponent} from './components/upload-config-file/upload-config-file.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatSnackBarModule} from '@angular/material';
import {DragDropDirective} from './directives/drag-drop-file';

@NgModule({
  declarations: [
    AppComponent,
    UploadConfigFileComponent,
    NavbarComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
