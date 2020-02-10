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

  constructor(private router: Router) {
    this.page_title = 'Identificate';
  }

  ngOnInit() {
    this.href = this.router.url;
        console.log(this.router.url);

        if (this.router.url == "/login") {
            console.log("lo es");
        }
  }

}
