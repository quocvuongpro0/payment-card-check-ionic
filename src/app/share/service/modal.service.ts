import {Injectable} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NotifyComponent} from "../component/popup/notify/notify.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalController: ModalController) {
  }

  async notify(isSuccess: boolean, headerText: string, message: string, buttons: { link: string; title: string }[]) {
    const modal = await this.modalController.create({
      component: NotifyComponent,
      cssClass: 'error-modal',
      componentProps: {isSuccess, headerText, message, buttons}
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    return data;
  }


  dismiss() {
    this.modalController.dismiss();
  }
}
