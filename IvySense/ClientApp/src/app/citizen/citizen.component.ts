import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: [ './citizen.component.scss']
})
export class CitizenComponent {

  collapsed = false;

  // Archive
  archive_columns = [
    { prop: 'type', sortable: true },
    { name: 'name', sortable: true },
    { name: 'date', sortable: true},
    { name: 'shared', sortable: true }
  ];
  archive_rows = [
    { type: 'folder', name: 'Folder 1', date: '01/01/2018' },
    { type: 'folder', name: 'Folder 2', date: '23/01/2018' },
    { type: 'image', name: 'Image 1', date: '12/02/2018' },
    { type: 'image', name: 'Image 2', date: '28/03/2018' },
    { type: 'video', name: 'Video 1', date: '29/03/2018' },
    { type: 'image', name: 'Image 3', date: '02/05/2018' },
    { type: 'video', name: 'Video 2', date: '17/05/2018' },
    { type: 'video', name: 'Video 3', date: '11/07/2018' },
    { type: 'video', name: 'Video 4', date: '19/07/2018' },
    { type: 'image', name: 'Image 4', date: '21/07/2018' },
    { type: 'video', name: 'Video 1', date: '11/08/2018'},
    { type: 'image', name: 'Image 3', date: '22/08/2018'},
    { type: 'video', name: 'Video 2', date: '26/08/2018'},
    { type: 'video', name: 'Video 3', date: '08/09/2018'},
    { type: 'video', name: 'Video 4', date: '14/09/2018'},
    { type: 'image', name: 'Image 4', date: '06/10/2018'},
    { type: 'video', name: 'Video 3', date: '29/10/2018'},
    { type: 'video', name: 'Video 4', date: '12/11/2018'},
    { type: 'image', name: 'Image 4', date: '24/12/2018'}
  ];
  loadingIndicator = true;
  reorderable = true;

  constructor() {
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }

}
