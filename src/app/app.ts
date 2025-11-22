import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <--- RouterOutlet y RouterLink
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos RouterOutlet para que pueda renderizar las rutas
  // e RouterLink para que el enlace del Navbar funcione.
  imports: [RouterOutlet, RouterLink, CommonModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Trabajo_Final';
}