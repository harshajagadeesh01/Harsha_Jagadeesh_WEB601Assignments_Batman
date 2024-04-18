import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  @Input() contentItems: Content[];

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
      imgURL: 'https://example.com/batman-begins.png',
      type: 'movie 🎥',
      tags: ['Batman', 'Action', 'Adventure']
    },
    {
      id: 2,
      title: 'The Dark Knight 🦇',
      description: 'Batman faces the Joker in a battle for Gotham City.',
      creator: 'Christopher Nolan 🎬',
      imgURL: 'https://example.com/the-dark-knight.png',
      type: 'movie 🎥',
      tags: ['Batman', 'Action', 'Crime', 'Drama']
    },
    {
      id: 3,
      title: 'The Dark Knight Rises 🦇',
      description: 'Batman returns to face Bane and save Gotham from destruction.',
      creator: 'Christopher Nolan 🎬',
      imgURL: 'https://example.com/the-dark-knight-rises.png',
      type: 'movie 🎥',
      tags: ['Batman', 'Action', 'Adventure']
    },
    {
      id: 4,
      title: 'Batman: Mask of the Phantasm 🦇',
      description: 'Batman faces a mysterious vigilante while dealing with his past.',
      creator: 'Eric Radomski, Bruce Timm 🎬',
      imgURL: 'https://example.com/batman-mask-of-the-phantasm.png',
      type: 'movie 🎥',
      tags: ['Batman', 'Animation', 'Action', 'Mystery']
    },
    {
      id: 5,
      title: 'Batman Returns 🦇',
      description: 'Batman battles the Penguin and Catwoman in Gotham City.',
      creator: 'Tim Burton🎬',
      imgURL: 'https://example.com/batman-returns.png',
      type: 'movie 🎥',
      tags: ['Batman', 'Action', 'Fantasy']
    }
  ];

}

displayContentDetails(contentItem: Content): void {
  console.log('Content ID:', contentItem.id);
  console.log('Content Title:', contentItem.title);
}

}
