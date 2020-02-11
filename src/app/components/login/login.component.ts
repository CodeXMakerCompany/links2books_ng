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
  
  //Html string
  htmlStr: string = '<strong>The Tortoise</strong> &amp; the Hare';
  //Current Year
  year: number = new Date().getFullYear();

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

      //innerHTML carga los datos al html
      this.htmlStr = '<strong>The Tortoise</strong> &amp; the Hare &amp; '+res[2];
      //Peticion al backend para traer la informacion del parent

      //Traer la imagen y nombre

      //Guardar Imagen y nombre en localStorage

      //Solicitarlas y cargarlas en el frontend

      //Login
        //Capturar credenciales del formulario
        //Peticion al backend de las credenciales
        //Si la peticion es exitosa -> continuar
          //Obtener rol del usuario
          //Dependiendo el rol enviar a la url del dashboard correspondiente.

        //Si la peticion no es exitosa -> error notificacion

    }


  }

}
