import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
 
  createDb() {
    
    const content = [

        {
          id: 1,
          title: 'Batman Begins',
          description: 'A young Bruce Wayne becomes Batman and faces his first challenges.',
          creator: 'Christopher Nolan 🎬',
          imgURL: '',
          type: '',
          tags: ['Batman', 'Action', 'Adventure']
        },
        {
          id: 2,
          title: 'The Dark Knight',
          description: 'Batman faces the Joker in a battle for Gotham City.',
          creator: 'Christopher Nolan 🎬',
          imgURL: '/assets/images/The Dark Knight.jpg',
          type: '',
          tags: ['Batman', 'Action', 'Crime', 'Drama']
        },
        {
          id: 3,
          title: 'The Dark Knight Rises',
          description: 'Batman returns to face Bane and save Gotham from destruction.',
          creator: 'Christopher Nolan 🎬',
          imgURL: '/assets/images/The Dark Knight Rises.jpg',
          type: 'Movie',
          tags: ['Batman', 'Action', 'Adventure']
        },
        {
          id: 4,
          title: 'Batman: Mask of the Phantasm',
          description: 'Batman faces a mysterious vigilante while dealing with his past.',
          creator: 'Eric Radomski, Bruce Timm 🎬',
          imgURL: '/assets/images/Mask of the Phantasm.jpg',
          type: 'Movie',
          tags: ['Batman', 'Animation', 'Action', 'Mystery']
        },
        {
          id: 5,
          title: 'Batman Returns',
          description: 'Batman battles the Penguin and Catwoman in Gotham City.',
          creator: 'Tim Burton🎬',
          imgURL: '/assets/images/Batman Returns.jpg',
          type: 'Movie',
          tags: ['Batman', 'Action', 'Fantasy']
        },
        {
          "id": 6,
          "title": "Batman Beyond",
          "description": "In a futuristic Gotham City, Terry McGinnis takes up the mantle of Batman under the guidance of an elderly Bruce Wayne.",
          "creator": "Bruce Timm, Paul Dini 🎬",
          "imgURL": "/assets/images/Batman Beyond.jpg",
          "type": "Animated Series",
          "tags": ["Batman", "Future", "Action"]
        },
        {
          "id": 7,
          "title": "Batman: The Animated Series",
          "description": "The Dark Knight battles villains like the Joker, Two-Face, and Poison Ivy in Gotham City.",
          "creator": "Bruce Timm, Eric Radomski 🎬",
          "imgURL": "/assets/images/BatmanAS.jpg",
          "type": "Animated Series",
          "tags": ["Batman", "Action", "Mystery"]
        }
            
      ];

    return {content};

    }

    genId(content: Content[]): number {
      return content.length > 0 ? Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
    }
      
}
