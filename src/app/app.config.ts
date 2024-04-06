import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"try-angularfire","appId":"1:631127401014:web:358812f4901356acf96e97","storageBucket":"try-angularfire.appspot.com","apiKey":"AIzaSyA_Ydd3sO2jJUK5suwb2la_l3J-1xsBQEQ","authDomain":"try-angularfire.firebaseapp.com","messagingSenderId":"631127401014"}))), importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
