import { Component } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { callOutline, locationOutline, rocketOutline } from 'ionicons/icons';
import { getFirebaseApp } from '../core/firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonIcon,
  ],
})
export class HomePage {
  protected readonly firebaseReady = getFirebaseApp() !== null;

  constructor() {
    addIcons({ callOutline, locationOutline, rocketOutline });
  }
}
