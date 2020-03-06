import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-correio',
  templateUrl: './menu-correio.component.html',
  styleUrls: ['./menu-correio.component.css']
})
export class MenuCorreioComponent implements OnInit {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
