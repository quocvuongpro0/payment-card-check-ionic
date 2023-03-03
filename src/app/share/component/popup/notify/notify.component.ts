import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
  @Input() isSuccess: boolean | undefined;
  @Input() headerText: string | undefined;
  @Input() message: string | undefined;
  @Input() buttons: { link: string; title: string; }[] | undefined;
  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  closePopup(url: string) {
    this.modalController.dismiss();
    if (url) {
      this.router.navigateByUrl(url);
    }
  }
}
