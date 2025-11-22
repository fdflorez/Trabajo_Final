import { Injectable } from '@angular/core';

export interface Pelicula {
  id: number;
  titulo: string;
  anio: string;
  imagen: string;
  sinopsis: string;
  actores: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[] = [
    { id: 1, titulo: "Dune: Parte 2", anio: "2024", imagen: "/assets/img/dune.jpg", sinopsis: "...", actores: "..." },
    { id: 2, titulo: "Oppenheimer", anio: "2023", imagen: "assets/img/oppenheimer.jpg", sinopsis: "La historia del físico J. Robert Oppenheimer.", actores: "Cillian Murphy, Emily Blunt" },
    { id: 3, titulo: "Barbie", anio: "2023", imagen: "assets/img/barbie.jpg", sinopsis: "Barbie y Ken se aventuran en el mundo real.", actores: "Margot Robbie, Ryan Gosling" }
  ];

  getPeliculas() {
    return this.peliculas;
  }

  getPelicula(id: number) {
    return this.peliculas.find(p => p.id === id);
  }
}