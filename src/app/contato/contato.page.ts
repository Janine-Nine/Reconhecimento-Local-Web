import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  callOutline,
  locationOutline,
  mailOutline,
  mapOutline,
  menuOutline,
  timeOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class ContatoPage {
  showMobileMenu = false;

  constructor() {
    addIcons({
      callOutline,
      locationOutline,
      mailOutline,
      mapOutline,
      menuOutline,
      timeOutline,
    });
  }

  toggleMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  closeMenu(): void {
    this.showMobileMenu = false;
  }
}
