import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
// import { ContentCardComponent } from "./content-card/content-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [CommonModule, RouterOutlet, ContentListComponent] // , ContentCardComponent
})
export class AppComponent {
  title = 'Clay_Laliberty_Batman';
}
