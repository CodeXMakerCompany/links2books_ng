import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public href: string = "";
  parent = false;

  constructor(private router: Router) {
    this.page_title = 'Identificate';
  }

  ngOnInit() {

    //Obtener ruta
    this.href = this.router.url;

    var str = this.href;
    var res = str.split("/");

    //Validar ruta con parametro
    if (res[2]) {
      this.parent = true;
      //Split a la ruta para dividir por diagonales
      console.log(res[2]);
    }


  }

}
