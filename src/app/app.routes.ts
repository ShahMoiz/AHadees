import { Route,Router,RouterModule } from '@angular/router';
// import { RouterModule } from '@angular/routes';


import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './404-page/404-page.component';
import { TowelComponent } from './towel/towel.component';

export const routes: Route[] = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomeComponent},
    {path: 'towel', component: TowelComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NoPageComponent},
]


export const routerModule = RouterModule.forRoot(routes)