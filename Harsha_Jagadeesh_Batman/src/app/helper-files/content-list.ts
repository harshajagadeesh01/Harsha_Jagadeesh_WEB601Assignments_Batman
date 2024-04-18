// // Content-list

// import { Content } from "./content-interface";


// export class ContentList {
    
//     private contentListItems: Content[];  // Array renamed as contentListItems

//     constructor() {    // Contructor for ContentList class
//         this.contentListItems = [];   // initialize array
//     }

//     get items(): Content[] {    // Provides a getter method for items
//         return this.contentListItems;
//     }
    
//     add(item: Content): void {  // add method to add the content properties 
//         this.contentListItems.push(item);
//     }

//     getCount(): number {    // method to return # of items  
//         return this.contentListItems.length;
//     }

//     displayContent(index: number): string { // Reader-freindly html output of content properties
//         const mainContent = this.contentListItems[index];

//         if(!mainContent) {
//             return 'Invaild index👎'
//         }

//         const imgTag = mainContent.imgURL ? `<img src="${mainContent.imgURL}" alt="Content Image">` : '';


//         return `
//         <div>
//             <h2>${mainContent.title}</h2>
//             <p>${mainContent.description}</p>
//             <p>Creator: ${mainContent.creator}</p>
//             ${imgTag}
//             <p>Type: ${mainContent.type}</p>
//         </div>
//         `;

//     }


// }
