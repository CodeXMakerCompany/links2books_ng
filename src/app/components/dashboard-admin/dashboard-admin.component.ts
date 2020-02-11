import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
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
