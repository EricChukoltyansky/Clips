import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public modal: ModalService, public auth: AuthService) {}

  ngOnInit(): void {}

  openModal($event: MouseEvent) {
    $event.preventDefault();

    this.modal.toggleModal('authentication');
  }

  logout($event: MouseEvent) {
    $event.preventDefault();

    this.auth.logout($event);
  }
}
