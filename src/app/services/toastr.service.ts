// import { InjectionToken } from '@angular/core';
// export const  TOASTR_TOKEN = new InjectionToken('toastr');
// export function toastrFactory() {
//  return window['toastr'];
// }
// export const TOASTR_PROVIDER = { provide: TOASTR_TOKEN, useFactory: toastrFactory };



import { InjectionToken } from '@angular/core';

// 1. creates a token that can be used to look up the toastr object inside dependency
//    indjection in registry. TOASTR_TOKEN is a JavaScript object.
// 2. then we need to register the token with the module
// 3. declare const toastr: Toastr; in module
// 4. create entry in module's providers
export const TOASTR_TOKEN = new InjectionToken('toastr');

// for large classes no need to create an interface, we can just use a type of any
export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}

// import { Injectable } from '@angular/core';
//
// declare const toastr;
//
// @Injectable()
// export class ToastrService {
//   success(msg: string, title: string) {
//     return toastr.success(msg);
//   }
//
//   info(msg: string, title: string) {
//     return toastr.info(msg);
//   }
//
//   error(msg: string, title: string) {
//     return toastr.error(msg);
//   }
//
//   warning(msg: string, title: string) {
//     return toastr.warning(msg);
//   }
// }
