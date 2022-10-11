import { Component, OnInit } from '@angular/core';
import { UsuarioServicio } from '../services/usuario.service';

@Component({
  selector: 'app-lista-actividad',
  templateUrl: './lista-actividad.component.html',
})
export class ListaActividadComponent implements OnInit {
  credencialesUsuarioList: Array<any> = [];
  id: number = 1;
  constructor(private usuarioServicio: UsuarioServicio) {
    usuarioServicio.getActividadesUsuario(this.id).subscribe((res: any) => {
      this.credencialesUsuarioList = res;
    });
  }

  ngOnInit(): void {}
}
