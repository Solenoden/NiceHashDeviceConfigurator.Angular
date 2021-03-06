import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {UploadConfigFileComponent} from './components/upload-config-file/upload-config-file.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';
import {DragDropDirective} from './directives/drag-drop-file';
import { ConfigureDeviceComponent } from './components/configure-device/configure-device.component';
import { GpuSettingsListSidebarComponent } from './components/gpu-settings-list-sidebar/gpu-settings-list-sidebar.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadConfigFileComponent,
    NavbarComponent,
    DragDropDirective,
    ConfigureDeviceComponent,
    GpuSettingsListSidebarComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
