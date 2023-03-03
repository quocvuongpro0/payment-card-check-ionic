import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController} from "@ionic/angular";
import {CreditCardComponent} from "../share/component/popup/credit-card/credit-card.component";
import {ModalService} from "../share/service/modal.service";
import {OK} from "../share/model/const";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public folder!: string;
  isModalOpen: boolean = true;
  randomNumber: number = Math.floor(Math.random() * 6) + 1;

  cardNumber: string = ''
  expDate: string = ''


  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private modalService: ModalService
  ) {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async openPayment() {
    const modal = await this.modalController.create({
      component: CreditCardComponent,
      componentProps: {
        numberPayment: this.randomNumber
      },
      cssClass: 'credit-card-modal'
    })
    await modal.present();

    const {data, role} = await modal.onWillDismiss();
    if (role == OK) {
      this.modalService.notify(true, '', ('Payment success US $' + data?.numberPayment + '  to SodaGift!!!'), [{
        title: 'OK',
        link: ''
      }])
    }
  }

  close() {
    this.isModalOpen = false
  }
}
