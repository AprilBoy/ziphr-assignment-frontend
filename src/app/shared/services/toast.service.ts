import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventTypes } from '../enums/event-types';
import { ToastEvent } from '../interfaces/toast-event';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  showToast(type: EventTypes, message: string): void {
    this._toastEvents.next({
      message,
      type,
    });
  }
}
