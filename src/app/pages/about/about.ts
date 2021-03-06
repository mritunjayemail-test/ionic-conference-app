import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Locationm'
  };

  constructor(public popoverCtrl: PopoverController, public photoService: PhotoService) { }


  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
