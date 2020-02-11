import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public href: string = "";
  parent = false;

  constructor(private router: Router) { }

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
