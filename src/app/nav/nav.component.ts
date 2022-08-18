import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    public modal: ModalService,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {}

  ngOnInit(): void {}

  openModal($event: MouseEvent) {
    $event.preventDefault();

    this.modal.toggleModal('authentication');
  }

  async logout($event: Event) {
    $event.preventDefault();

    await this.afAuth.signOut();

    await this.router.navigateByUrl('/');
  }
}
