import { Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { AcountLoginComponent } from './Pages/acount-login/acount-login.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';
import { authorizeGuard } from './guards/authorize.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: "Contact", component: ContactComponent },
    { path: 'login', component: AcountLoginComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'userdashboard', component: UserDashboardComponent, canActivate:[authorizeGuard] }
];
