import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StudentsComponent } from './Components/students/students.component';
import { SubmitProjectsComponent } from './Components/submit-projects/submit-projects.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { CompetitionComponent } from './Components/competition/competition.component';
import { FeaturedCompetitionsComponent } from './Components/home-page/featured-competitions/featured-competitions.component';
import { Component } from '@angular/core';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component:DashboardComponent},
    {path: 'students', component:StudentsComponent},
    {path: 'submit-projects/:id', component:SubmitProjectsComponent},
    {path: 'projects', component:ProjectsComponent},
    {path: 'competition', component:CompetitionComponent},
    {path: 'allCompetition',
        loadComponent:()=>
            import('./Components/home-page/featured-competitions/featured-competitions.component').then((c)=>c.FeaturedCompetitionsComponent)
    }
];
