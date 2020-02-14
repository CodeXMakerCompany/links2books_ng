import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Cargar modelo a instanciar
import { User } from "../../models/user";
import { Parent } from  "../../models/parent";
//Cargar servicios del modelo HTTP responses
import {} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public href: string = "";
  public route_parent: string;
  public user: User;
  parent = false;

  //Html string
  htmlStr: string = '<strong>The Tortoise</strong> &amp; the Hare';
  //Current Year
  year: number = new Date().getFullYear();

  constructor(private router: Router) {
    this.page_title = 'Identificate';
    //Crear objeto del usuario
    this.user = new User('','','','','','','ROLE_USER');
  }

  ngOnInit() {

  //Peticion para cargar los datos del parent  
  this.loadMainData();

  }

  loadMainData(){
    //Obtener ruta
    this.href = this.router.url;

    //Crear array
    var str = this.href;
    //Dividir por diagonales
    var res = str.split("/");
    //Obtener primer valor
    //Validar ruta con parametro
    if (res[1]) {

      this.parent = true;
      //Split a la ruta para dividir por diagonales

      //innerHTML carga los datos al html
      this.htmlStr = '<strong>The Tortoise</strong> &amp; the Hare &amp; '+res[1];
      //Peticion al backend para traer la informacion del parent

      this.route_parent = res[1];
      localStorage.setItem('parent', JSON.stringify(this.route_parent));
      console.log(res[1]);
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

  //Inicia Funcion de login
  onSubmitLoginForm(form){

    console.log(form);

    this.router.navigate([this.route_parent+'/dashboard_coordinador']);

  }
//Finaliza Funcion de login

  signIn(){

    if (this.route_parent) {
        this.router.navigateByUrl(this.route_parent+'/dashboard_coordinador');
    }

  }

  toRegister() {
    if (this.route_parent) {
        this.router.navigateByUrl(this.route_parent+'/registro');
    }
  }

}
