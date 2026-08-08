import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { environment } from '../../environments/environment';

export function getFirebaseApp(): FirebaseApp | null {
  if (!environment.firebase.apiKey || !environment.firebase.appId) {
    return null;
  }

  return getApps()[0] ?? initializeApp(environment.firebase);
}
