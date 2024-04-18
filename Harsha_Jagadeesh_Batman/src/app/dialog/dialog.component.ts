import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { MatButtonModule } from '@angular/material/button';
import { BatmanServiceService } from '../batman-service.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatDialogModule, MatButtonModule,],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  newContent: any = {};

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Content,
    private batmanService: BatmanServiceService
  ) {}

  submitNewContent() {
    this.batmanService.addContent(this.newContent).subscribe(addedContent => {
      this.newContent = addedContent
    })
    this.dialogRef.close(this.newContent);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
