import { Routes } from '@angular/router';
// Asegúrate que aquí dice InicioComponent y DetalleComponent
import { InicioComponent } from './components/inicio/inicio'; 
import { DetalleComponent } from './components/detalle/detalle';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'pelicula/:id', component: DetalleComponent },
    { path: '**', redirectTo: '' }
];