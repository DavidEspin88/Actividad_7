import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// definir una interfaz para los datos.
export interface Estudiante {
  id: number;
  nombre: string;
  carreraId: number;
  nombreCarrera: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // La URL base del servicio estudiantes
  private readonly apiUrl = 'http://localhost:3000/estudiantes';

  // Inyectamos HttpClient en el constructor para poder usarlo
  constructor(private http: HttpClient) { }

  // Método para obtener todos los estudiantes. Devuelve un Observable.
  public getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  // Método para registrar un nuevo estudiante.
  // Recibe un objeto con nombre y carreraId.
  public addEstudiante(data: { nombre: string, carreraId: number }): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.apiUrl, data);
  }
}