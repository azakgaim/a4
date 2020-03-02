
import { InjectionToken } from '@angular/core';

export const JQUERY_TOKEN = new InjectionToken('jQuery');


// import { InjectionToken } from '@angular/core';
// export const JQUERY_TOKEN = new InjectionToken('jQuery');
// export function jqueryFactory() {
//     return window['jQuery'];
// }
// export const JQUERY_PROVIDER = {
//   provide: JQUERY_TOKEN,
//   useFactory: jqueryFactory
// };
