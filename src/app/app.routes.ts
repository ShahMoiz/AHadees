import { Route,Router,RouterModule } from '@angular/router';
// import { RouterModule } from '@angular/routes';


import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Route[] = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
]


export const routerModule = RouterModule.forRoot(routes)