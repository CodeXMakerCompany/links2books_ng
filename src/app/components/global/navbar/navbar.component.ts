import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public parent;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    let parent = JSON.parse(localStorage.getItem('parent'));
    this.router.navigate([parent]);
  }

  homeNavigation(){
    console.log("Voy a casa");
  }

  shopNavigation(){
    console.log("Vamos a tienda");
  }

  myAccountNavigation(){
    console.log("Vamos a mi cuenta");
  }

  showTutorials(){

  }

}
