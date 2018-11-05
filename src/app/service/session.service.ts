import { Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public data:any=[];
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }


  saveInSession(key: string, val: any): void {
    console.log('recieved= key:' + key + 'value:' + val);
    console.log(this.storage);
    this.storage.set(key, val);
   }

   getFromSession(key: string): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);

   }
}
