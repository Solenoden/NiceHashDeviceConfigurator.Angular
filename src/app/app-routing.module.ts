import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UploadConfigFileComponent} from './components/upload-config-file/upload-config-file.component';
import {ConfigureDeviceComponent} from './components/configure-device/configure-device.component';
import {AboutPageComponent} from './components/about-page/about-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: NavbarComponent,
    children: [
      {
        path: 'upload',
        component: UploadConfigFileComponent
      },
      {
        path: 'configure-device',
        component: ConfigureDeviceComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/upload',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
