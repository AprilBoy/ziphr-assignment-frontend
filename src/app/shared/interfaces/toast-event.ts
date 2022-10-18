import { EventTypes } from '../enums/event-types';

export interface ToastEvent {
  type: EventTypes;
  message: string;
}