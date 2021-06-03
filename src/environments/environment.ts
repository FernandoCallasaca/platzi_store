// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'http://platzi-store.herokuapp.com',
  // https://github.com/angular/angularfire/tree/v5 <- link
  firebase: {
    apiKey: 'AIzaSyDZLI5gnkon7doRp-DqDmCFPvL_-NnmYAY',
    authDomain: 'platzi-store-95d0e.firebaseapp.com',
    projectId: 'platzi-store-95d0e',
    storageBucket: 'platzi-store-95d0e.appspot.com',
    messagingSenderId: '935612802896',
    appId: '1:935612802896:web:cd398aad5d104994bd6e55'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
