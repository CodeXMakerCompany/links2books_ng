import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public href: string = "";
  public route_parent;
  parent = false;

  constructor(private router: Router) { }

  ngOnInit() {
    //Obtener ruta
    this.href = this.router.url;

    var str = this.href;
    var res = str.split("/");

    //Validar ruta con parametro
    if (res[1]) {
      //Flag para comenzar a cargar los datos del parent.
      this.parent = true;
      //Split a la ruta para dividir por diagonales
      console.log(res[1]);
      this.route_parent = res[1];
      localStorage.setItem('parent', JSON.stringify(this.route_parent));
    }
  }

  backpage(){
    this.router.navigateByUrl(this.route_parent);
  }

}
