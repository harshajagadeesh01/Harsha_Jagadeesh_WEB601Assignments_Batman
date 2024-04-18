import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentItems } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BatmanServiceService {

  constructor(private messageService: MessageService, private http: HttpClient, private inMemoryDataService: InMemoryDataService) { }

  addContent(newContent: Content): Observable<Content> {
    this.messageService.add('New content added: ' + newContent.title);
    const newId = this.inMemoryDataService.genId(this.inMemoryDataService.createDb().content);
    newContent.id = newId;

    return this.http.post<Content>('/api/content', newContent);
  }

  getContentItems(): Observable<Content[]> {
    this.messageService.add('Content array loaded!');
    return of(this.inMemoryDataService.createDb().content);
  }

  getSingleItem(id: number): Observable<Content | undefined> {
    this.messageService.add(`Content item at id: ${id}`);
    return of(this.inMemoryDataService.createDb().content).pipe(
      map(content => content.find(item => item.id === id))
    );
  }

   // getContentItems(): Observable<Content[]> {
  //   this.messageService.add('Content array loaded!');
  //   return of(contentItems);
  // }


  // getSingleItem(id: number): Observable<Content | undefined> {
  //   this.messageService.add(`Content Item at id: ${id}`);
  //   return of(contentItems.find(item => item.id === id));
  // }


}
