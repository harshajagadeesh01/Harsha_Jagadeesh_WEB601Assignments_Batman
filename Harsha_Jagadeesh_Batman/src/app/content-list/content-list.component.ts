import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentTypeFilterPipe } from "../content-type-filter.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentTypeFilterPipe, FormsModule]
})
export class ContentListComponent implements OnInit {
  @Input() contentItems: Content[];
  searchTitle = '';
  contentFound = false;
  searchResult = '';
 
  constructor() {
    this.contentItems = [];
  }

  ngOnInit(): void {
    this.contentItems = [
    {
      id: 1,
      title: 'Batman Begins 🦇',
      description: 'A young Bruce Wayne becomes Batman and faces his first challenges.',
      creator: 'Christopher Nolan 🎬',
      imgURL: '/assets/images/Batman Begins.jpg',
      type: '',
      tags: ['Batman', 'Action', 'Adventure']
    },
    {
      id: 2,
      title: 'The Dark Knight 🦇',
      description: 'Batman faces the Joker in a battle for Gotham City.',
      creator: 'Christopher Nolan 🎬',
      imgURL: '/assets/images/The Dark Knight.jpg',
      type: '',
      tags: ['Batman', 'Action', 'Crime', 'Drama']
    },
    {
      id: 3,
      title: 'The Dark Knight Rises 🦇',
      description: 'Batman returns to face Bane and save Gotham from destruction.',
      creator: 'Christopher Nolan 🎬',
      imgURL: '/assets/images/The Dark Knight Rises.jpg',
      type: 'movie',
      tags: ['Batman', 'Action', 'Adventure']
    },
    {
      id: 4,
      title: 'Batman: Mask of the Phantasm 🦇',
      description: 'Batman faces a mysterious vigilante while dealing with his past.',
      creator: 'Eric Radomski, Bruce Timm 🎬',
      imgURL: '/assets/images/Mask of the Phantasm.jpg',
      type: 'movie',
      tags: ['Batman', 'Animation', 'Action', 'Mystery']
    },
    {
      id: 5,
      title: 'Batman Returns 🦇',
      description: 'Batman battles the Penguin and Catwoman in Gotham City.',
      creator: 'Tim Burton🎬',
      imgURL: '/assets/images/Batman Returns.jpg',
      type: 'movie',
      tags: ['Batman', 'Action', 'Fantasy']
    },
    {
      "id": 6,
      "title": "Batman Beyond 🦇",
      "description": "In a futuristic Gotham City, Terry McGinnis takes up the mantle of Batman under the guidance of an elderly Bruce Wayne.",
      "creator": "Bruce Timm, Paul Dini 🎬",
      "imgURL": "/assets/images/Batman Beyond.jpg",
      "type": "animated series",
      "tags": ["Batman", "Future", "Action"]
    },
    {
      "id": 7,
      "title": "Batman: The Animated Series 🦇",
      "description": "The Dark Knight battles villains like the Joker, Two-Face, and Poison Ivy in Gotham City.",
      "creator": "Bruce Timm, Eric Radomski 🎬",
      "imgURL": "/assets/images/BatmanAS.jpg",
      "type": "animated series",
      "tags": ["Batman", "Action", "Mystery"]
    }
        
  ];

}

displayContentDetails(contentItem: Content): void {
  console.log('Content ID:', contentItem.id);
  console.log('Content Title:', contentItem.title);
}

searchContent() {
  this.contentFound = this.contentItems.some(item => item.title.toLowerCase() === this.searchTitle.toLocaleLowerCase());
  this.searchResult = this.contentFound ? 'Content found!' : 'Content not found.';
}

}
