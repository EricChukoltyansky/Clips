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
