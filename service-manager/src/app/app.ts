import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePage } from "./pages/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('service-manager');

  imagePath: string = "images/header/Angular_gradient_logo.png";
}
