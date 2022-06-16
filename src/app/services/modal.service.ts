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

  isModalOpen(id: string): boolean | undefined {
    return this.modals.find((element) => element.id === id)?.visible;

    // second option to check if modal is boolean, by turning undefined to boolean
    // !!return this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string): void {
    const modal = this.modals.find((element) => element.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
  }

  register(id: string): void {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string): void {
    const index = this.modals.findIndex((element) => element.id === id);

    if (index !== -1) {
      this.modals.splice(index, 1);
    }
  }
}
