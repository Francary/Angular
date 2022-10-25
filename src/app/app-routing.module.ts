import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoComponent } from './components/hijo/hijo.component';
import { Micro2 } from './micro.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'hijo' , component:HijoComponent},
  { path: 'micro', component:Micro2},
  { path: 'home', component:HomeComponent},
  
  // Pagina con Error primero hay que crear el componte para que funcione 
  //{path: '**', component: Pagina404Component}
  //Redireccionar siempre a una pagina
  { path: '**' , pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
