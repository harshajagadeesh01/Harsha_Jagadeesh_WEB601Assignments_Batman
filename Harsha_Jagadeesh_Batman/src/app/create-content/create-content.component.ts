import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() newContentItemAdded = new EventEmitter<Content>();

  // Property to hold new content 
  newItem: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };

  // Empty error message to be used to hand errors
  errorMessage: string = ''; 
  
  // Function to handle new content 
  addNewItem() {
    const newContent = { ...this.newItem }; // Create a copy to avoid messing with exsisting items
  
    const promise = new Promise((resolve, reject) => {
      // Checks user input to make sure it fits the content (Upper and Lower case accepted)
      if (newContent.type && (newContent.type.toLowerCase() !== "movie" && newContent.type.toLowerCase() !== "animated series")) {
        reject("Failed to add content: Invalid content type. Must be 'Movie' or 'Animated Series'.");
      } else {
        setTimeout(() => {
          resolve(`Content "${newContent.title}" added successfully ✅`);
          console.log(`Content "${newContent.title}" added successfully`);
        }, 1000);
      }
    });
  
    promise
      .then(message => {
        console.log(message);
        // Resets fields after user sumbits correctly 
        this.newItem = { id: 0, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] }; 
        // Clears error message after correct input is made 
        this.errorMessage = '';
        this.newContentItemAdded.emit(newContent);
      })
      .catch (error => {
        this.errorMessage = error;
      });
  }
  
  

}


