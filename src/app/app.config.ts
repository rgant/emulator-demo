import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "brainfry-app", appId: "1:207926801743:web:cab96e3b19b07047b0813a", storageBucket: "brainfry-app.appspot.com", apiKey: "AIzaSyB75fqz0szrfVCLvpil9_t9UPQlLYplNcI", authDomain: "brainfry-app.firebaseapp.com", messagingSenderId: "207926801743" })), provideFirestore(() => getFirestore())]
};
