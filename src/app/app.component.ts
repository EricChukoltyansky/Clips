import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./custom.css'],
})
export class AppComponent {
  showModal: boolean = true;

  constructor(private auth: AuthService) {}
}
