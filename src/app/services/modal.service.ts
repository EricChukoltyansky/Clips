import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  isModalOpen(): boolean {
    return true;
  }

  toggleModal(): void {
    // this.visible = !this.visible;
  }

  register(id: string): void {
    this.modals.push({
      id,
      visible: false,
    });
  }
}
