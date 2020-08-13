import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './componentes/cliente/cliente.component';
import { PremioComponent } from './componentes/premio/premio.component';
import { InicioComponent } from './componentes/inicio/inicio.component';



const routes: Routes = [

    { path:'', component: InicioComponent },
    { path:'cliente', component: ClienteComponent },
    { path:'premio', component: PremioComponent },
    //{ path:'**', pathMatch: 'full', component:  }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }