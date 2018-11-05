import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BackOfficeComponent } from './back-office/back-office.component'
import { AuthGard } from './service/auth-guard.service';
import { EmployeComponent } from './employe/employe.component';


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil',  component:  AccueilComponent },
  { path: 'backoffice/:role', component:  BackOfficeComponent },
  { path: '**', redirectTo: 'accueil'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
