import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor
import { RouterLink } from '@angular/router';   // Para los enlaces
import { FormsModule } from '@angular/forms';   // Para [(ngModel)]
import { PeliculasService, Pelicula } from '../../peliculas.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // <--- AQUÍ ESTÁ LA CLAVE DE LOS ERRORES
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent implements OnInit {
  peliculas: Pelicula[] = [];
  peliculasFiltradas: Pelicula[] = [];
  filtro: string = '';

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculas = this.peliculasService.getPeliculas();
    this.peliculasFiltradas = this.peliculas;
  }

  buscar() {
    this.peliculasFiltradas = this.peliculas.filter(p => 
      p.titulo.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}