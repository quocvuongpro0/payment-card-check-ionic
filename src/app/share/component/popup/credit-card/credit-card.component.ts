import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {CANCEL, maskCredits, OK} from "../../../model/const";
import * as IMask from 'imask';
import {ModalService} from "../../../service/modal.service";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit {
  @Input() numberPayment: number = 1
  cardNumber: string = ''
  exp: string = '';
  cvc: string = '';
  saveCard: boolean = false;

  isMaskType = {
    mask: '',
    regex: '',
    cardType: 'unknown',
    icon: 'credit-card'
  }
  mask: any = maskCredits

  constructor(public modalController: ModalController, private modalService: ModalService) {
  }

  ngOnInit() {
    if (localStorage.getItem('creditCard')) {
      this.saveCard = true
    }
  }


//For Card Number formatted input
  cardNumChange($event: any) {
    if ($event.target.value == $event.target.lastValue) return;
    var caretPosition = $event.target.selectionStart;
    var sanitizedValue = $event.target.value.replace(/[^0-9]/gi, '');
    var parts = [];
    for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
      parts.push(sanitizedValue.substring(i, i + 4));
    }
    for (var i = caretPosition - 1; i >= 0; i--) {
      var c = $event.target.value[i];
      if (c < '0' || c > '9') {
        caretPosition--;
      }
    }
    caretPosition += Math.floor(caretPosition / 4);
    $event.target.value = $event.target.lastValue = parts.join(' ');
    $event.target.selectionStart = $event.target.selectionEnd = caretPosition;
    //Check card number
    var number = this.cardNumber.replace(/\D/g, '');

    for (var i = 0; i < this.mask.length; i++) {
      let re = new RegExp(this.mask[i].regex);
      if (number.match(re) != null) {
        this.isMaskType = this.mask[i];
        return;
      }
    }
  }

//For Date formatted input
  expDateChange($event: any) {
    if ($event.target.value == $event.target.lastValue) return;
    var caretPosition = $event.target.selectionStart;
    var sanitizedValue = $event.target.value.replace(/[^0-9]/gi, '');
    var parts = [];

    for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
      parts.push(sanitizedValue.substring(i, i + 2));
    }

    for (var i = caretPosition - 1; i >= 0; i--) {
      var c = $event.target.value[i];
      if (c < '0' || c > '9') {
        caretPosition--;
      }
    }

    caretPosition += Math.floor(caretPosition / 2);
    $event.target.value = $event.target.lastValue = parts.join('/');
    $event.target.selectionStart = $event.target.selectionEnd = caretPosition;
  }

//For card password
  cardPasswordChange($event: any) {
    if ($event.target.value == $event.target.lastValue) return;
    var caretPosition = $event.target.selectionStart;
    var sanitizedValue = $event.target.value.replace(/[^0-9]/gi, '');
    var parts = [];
    for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
      parts.push(sanitizedValue.substring(i, i + 4));
    }
    for (var i = caretPosition - 1; i >= 0; i--) {
      var c = $event.target.value[i];
      if (c < '0' || c > '9') {
        caretPosition--;
      }
    }
    caretPosition += Math.floor(caretPosition);
    $event.target.value = $event.target.lastValue = parts
    $event.target.selectionStart = $event.target.selectionEnd = caretPosition;
  }

  //Mask
  // @ts-ignore
  expirationDateMask = {
    mask: 'MM{/}YY',
    blocks: {
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2,
      },
      YY: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 99,
      }
    }
  };


  close(status?: string) {
    if (status == OK) {
      this.modalController.dismiss({}, OK)
    } else {
      this.modalController.dismiss({}, CANCEL)
    }
  }

  renderIcon() {
    return '../../../../../assets/icon/' + this.isMaskType.icon + '.svg'
  }

  paymentSuccess() {
    if (this.exp == '') {
      this.modalService.notify(false, '', 'Please enter exp card!', [{title: OK, link: ''}])
      return
    }
    if (this.cvc == '') {
      this.modalService.notify(false, '', 'Please enter cvc card!', [{title: OK, link: ''}])
      return
    }

    if (this.saveCard) {
      localStorage.setItem('creditCard', JSON.stringify({
        cardNumber: this.cardNumber,
        exp: this.exp,
        cvc: this.cvc
      }))
    }
    this.modalController.dismiss(
      {
        cardNumber: this.cardNumber,
        exp: this.exp,
        cvc: this.cvc,
        numberPayment: this.numberPayment
      }, OK)
  }
}
