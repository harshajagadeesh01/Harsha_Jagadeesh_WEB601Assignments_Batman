import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { BatmanServiceService } from '../batman-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatButtonModule, MatInputModule,],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss',
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

  constructor(private batmanService: BatmanServiceService, public dialog: MatDialog) {}

  openAddContentDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { type: this.newContent.type }
  });

  }
  
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
