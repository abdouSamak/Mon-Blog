import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myBlog';
  mail2 = "abdou.samake0908@gmail.com";
  route = true;
  constructor(private router: Router) {}

  jumptop(): void {
    this.router.navigate(['/accueil']);
    this.route = true;
  }

}
