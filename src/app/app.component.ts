import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./custom.css'],
})
export class AppComponent {
  showModal: boolean = true;

  constructor(public modal: ModalService) {}

  ngOnInit() {
    setInterval(() => {
      this.showModal = !this.showModal;
      console.log(this.modal.modals);
    }, 1000);
  }
}
