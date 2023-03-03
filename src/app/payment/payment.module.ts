import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import {CreditCardComponent} from "../share/component/popup/credit-card/credit-card.component";
import {IMaskModule} from "angular-imask";
import {NotifyComponent} from "../share/component/popup/notify/notify.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PaymentPageRoutingModule,
        IMaskModule
    ],
  declarations: [PaymentPage, CreditCardComponent, NotifyComponent]
})
export class FolderPageModule {}
