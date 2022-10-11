import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioServicio {
  constructor(private http: HttpClient) {}
  getcredencialesUsuario() {
    return this.http.get('https://localhost:44350/api/CredencialesUsuario');
  }
  getActividadesUsuario(id: any) {
    return this.http.get('https://localhost:44350/api/CredencialesUsuario', {
      params: id,
    });
  }
  saludar: string = 'hola';
}
