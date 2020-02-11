import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public href: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    //Obtener ruta
    this.href = this.router.url;

    var str = this.href;
    var res = str.split("/");

    //Validar ruta con parametro
    if (res[2]) {
      //Split a la ruta para dividir por diagonales
      console.log(res[2]);
    }
  }

}
