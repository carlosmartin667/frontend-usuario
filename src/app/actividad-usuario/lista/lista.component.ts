import { Component, OnInit } from '@angular/core';
import { UsuarioServicio } from '../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  credencialesUsuarioList: Array<any> = [];
  constructor(private usuarioServicio: UsuarioServicio) {
    usuarioServicio.getcredencialesUsuario().subscribe((res: any) => {
      this.credencialesUsuarioList = res;
    });
  }
  get usuario() {
    return this.usuarioServicio.saludar;
  }
  ngOnInit(): void {}
}
