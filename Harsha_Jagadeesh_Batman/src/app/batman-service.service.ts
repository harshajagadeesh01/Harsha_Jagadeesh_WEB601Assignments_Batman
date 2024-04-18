import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentItems } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BatmanServiceService {

  constructor(private messageService: MessageService) { }

  getContentItems(): Observable<Content[]> {
    this.messageService.add('Content array loaded!');
    return of(contentItems);
  }

  getSingleItem(id: number): Observable<Content | undefined> {
    this.messageService.add(`Content Item at id: ${id}`);
    return of(contentItems.find(item => item.id === id));
  }

}
