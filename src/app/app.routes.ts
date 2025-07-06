import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StudentsComponent } from './Components/students/students.component';
import { SubmitProjectsComponent } from './Components/submit-projects/submit-projects.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { CompetitionComponent } from './Components/competition/competition.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component:DashboardComponent},
    {path: 'students', component:StudentsComponent},
    {path: 'submit-projects', component:SubmitProjectsComponent},
    {path: 'projects', component:ProjectsComponent},
    {path: 'competition', component:CompetitionComponent}
];
