import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentTypeFilterPipe } from "../content-type-filter.pipe";
import { HoverOverDirective } from '../hover-over.directive';
import { FormsModule } from '@angular/forms';
import { BatmanServiceService } from '../batman-service.service';
import { ModifyContentComponent } from '../modify-content/modify-content.component';


@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentTypeFilterPipe, FormsModule, HoverOverDirective, ModifyContentComponent]
})
export class ContentListComponent implements OnInit {
  contentItems: Content[] = [];
  searchTitle = '';
  contentFound = false;
  searchResult = '';
  singleItemId: Content | undefined;
 
  constructor(private batmanService: BatmanServiceService) {
  
  }

  ngOnInit() {
    const singleItemId = 7;

    this.batmanService.getSingleItem(singleItemId).subscribe(item => {
      this.singleItemId = item;
    });

    this.batmanService.getContentItems().subscribe(items => {
      this.contentItems = items;
    });
  }

  displayContentDetails(contentItem: Content): void {
    console.log('Content ID:', contentItem.id);
    console.log('Content Title:', contentItem.title);
  }

  searchContent() {
    this.contentFound = this.contentItems.some(item => item.title.toLowerCase() === this.searchTitle.toLocaleLowerCase());
    this.searchResult = this.contentFound ? 'Content found!' : 'Content not found.';
  }

  addContent(newContent: Content) {
    this.batmanService.addContent(newContent).subscribe(addedContent => {
      this.contentItems.push(addedContent);
    })
  }

}
