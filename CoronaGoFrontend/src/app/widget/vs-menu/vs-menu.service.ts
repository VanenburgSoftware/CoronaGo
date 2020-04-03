import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VsMenuService {
  menuStateChange: BehaviorSubject<string> = new BehaviorSubject<string>('open');
  constructor() { }

  emit(value: string) {
    this.menuStateChange.next(value);
  }
}
