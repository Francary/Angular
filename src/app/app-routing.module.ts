import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarraComponent } from './components/barra/barra.component';
import { SubteComponent }   from './components/subte/subte.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent }    from './pages/home/home.component';

const routes: Routes = [

  { path: 'subte', component: SubteComponent},
  { path: 'home', component: HomeComponent},
  { path: 'hello', component: HelloComponent},
  { path: 'barra', component: BarraComponent},
  { path: 'formulario', component: LoginComponent}
 // { path: '' , pathMatch: 'full', redirectTo:'index'}
  
  // Pagina con Error primero hay que crear el componte para que funcione 
  //{path: '**', component: Pagina404Component}
  //Redireccionar siempre a una pagina
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
