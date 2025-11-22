import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PeliculasService, Pelicula } from '../../peliculas.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // <--- Importaciones necesarias
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.css']
})
export class DetalleComponent implements OnInit {
  pelicula: Pelicula | undefined;
  nuevoComentario: string = '';
  comentarios: string[] = [];
  storageKey: string = '';

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pelicula = this.peliculasService.getPelicula(id);
    
    if (this.pelicula) {
      this.storageKey = `comments_${this.pelicula.id}`;
      const saved = localStorage.getItem(this.storageKey);
      this.comentarios = saved ? JSON.parse(saved) : [];
    }
  }

  agregarComentario() {
    if (this.nuevoComentario.trim()) {
      this.comentarios.push(this.nuevoComentario);
      localStorage.setItem(this.storageKey, JSON.stringify(this.comentarios));
      this.nuevoComentario = '';
    }
  }
}