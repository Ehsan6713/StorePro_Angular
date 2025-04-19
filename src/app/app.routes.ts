import { Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
     {path:"Contact",component:ContactComponent}
];
