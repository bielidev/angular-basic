import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      description: 'I am Carolina Blanco',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About',
      description: 'About me',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact',
      description: 'Contact me',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
