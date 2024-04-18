import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { BatmanServiceService } from '../batman-service.service';



@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.sass'
})
export class ModifyContentComponent {

  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [],
  }

  constructor(private batmanService: BatmanServiceService) {}

  onSubmit() {
    this.batmanService.addContent(this.newContent)
    this.contentAdded.emit(this.newContent); 
    this.newContent = {
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: [],
    }
  }

}
