import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './personas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private API_URL = 'http://localhost:3000/personas';
  constructor(private http: HttpClient) { }
  obtenerPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.API_URL);
  }
}
