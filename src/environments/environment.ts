// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 取得したFirebaseの情報を設定してください
  firebase: {
    apiKey: "AIzaSyDjg5P1ellCHkJjr_f7g38QTI9jasmRLXU",
    authDomain: "angular-chat-2adcd.firebaseapp.com",
    databaseURL: "https://angular-chat-2adcd-default-rtdb.firebaseio.com",
    projectId: "angular-chat-2adcd",
    storageBucket: "angular-chat-2adcd.appspot.com",
    messagingSenderId: "106208190105",
    appId: "1:106208190105:web:970dc014aaa9ed755f2208"
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
