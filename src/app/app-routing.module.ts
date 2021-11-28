import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TeamComponent } from './team/team.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';
import { GauthComponent } from './gauth/gauth.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'view', component: ViewComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'team', component: TeamComponent},
  {path: 'googleauthenticate', component: GauthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CoursesComponent, LoginComponent, HomeComponent, RegistrationFormComponent, TeamComponent, SigninComponent]