import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<any>()
  constructor() { }

  toggle(): void{
    this.subject
    .next(true)
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
