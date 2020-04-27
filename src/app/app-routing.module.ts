import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UploadConfigFileComponent} from './components/upload-config-file/upload-config-file.component';

const routes: Routes = [
  {
    path: 'main',
    component: NavbarComponent,
    children: [
      {
        path: 'upload',
        component: UploadConfigFileComponent
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
