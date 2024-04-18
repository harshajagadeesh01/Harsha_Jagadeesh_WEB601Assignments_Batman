import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.messages;
  }

}
