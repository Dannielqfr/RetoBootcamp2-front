import { Component, inject, signal } from '@angular/core';
import { Persona } from '../../services/personas.interface';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-personas-lista',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './personas-lista.component.html',
  styleUrl: './personas-lista.component.css'
})
export class PersonasListaComponent {
  private personasService = inject(PersonasService);
  personas = signal<Persona[]>([]);

  constructor() {
    this.cargarPersonas(); // carga inicial
  }

  cargarPersonas(): void {
    this.personasService.obtenerPersonas().subscribe((data) => {
      this.personas.set(data);
    });
  }
}
