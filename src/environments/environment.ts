// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://api.themoviedb.org/3',
  apiKey: 'f59ca20e2830c5fcec7c73b7c66b9927',
  images: 'http://image.tmdb.org/t/p',
  todoBaseUrl: 'http://localhost:3000/',
  //todoBaseUrl: ' http://192.168.1.7:3000/',
  fakeproductUrl: 'https://fakestoreapi.com',
  //localBaseUrl: 'http://10.150.8.22:7075/api/',
  localBaseUrl: 'https://localhost:44323/api/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
