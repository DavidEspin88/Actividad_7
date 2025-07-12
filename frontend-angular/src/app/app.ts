// 1. Quita RouterOutlet de aquí
// 1. Quita RouterOutlet de aquí
import { Component } from '@angular/core';

import { RegistroComponent } from './components/registro/registro';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Y quítalo de aquí también
  imports: [RegistroComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'frontend-angular';
}