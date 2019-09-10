import { Component } from '@angular/core';

@Component({
  selector: 'app-security-force',
  templateUrl: './security-force.component.html',
  styleUrls: ['./security-force.component.scss']
})
export class SecurityForceComponent {

  collapsed = false;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // Histogram
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // History
  history_columns = [
    { prop: 'name' },
    { name: 'Age' },
    { name: 'Location', sortable: false },
    { name: '', prop: 'View' }
  ];
  history_rows = [
    { name: 'Camille', age: 25, location: 'Pyongyang', view: 'Details' },
    { name: 'Daisy', age: 30, location: 'Makassar', view: 'Details' },
    { name: 'Edith', age: 29, location: 'Bandung', view: 'Details' },
    { name: 'Faith ', age: 17, location: 'London', view: 'Details' },
    { name: 'Gabrielle', age: 21, location: 'Riyadh', view: 'Details' },
    { name: 'Agatha ', age: 23, location: 'Manila', view: 'Details' },
    { name: 'Celeste ', age: 25, location: 'Havana', view: 'Details' },
    { name: 'Aileen', age: 19, location: 'Harare', view: 'Details' },
    { name: 'Cassandra ', age: 32, location: 'Hyderabad', view: 'Details' },
    { name: 'Jane ', age: 30, location: 'Kinshasa', view: 'Details' },
    { name: 'Charlotte ', age: 27, location: 'Faisalabad', view: 'Details' },
    { name: 'Eunice', age: 28, location: 'Shantou', view: 'Details' },
    { name: 'Isadora', age: 24, location: 'Lucknow', view: 'Details' }
  ];

  // Archive
  archive_columns = [
    { prop: 'type', sortable: false },
    { name: 'name', sortable: false },
    { name: 'date', sortable: false }
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
    { type: 'image', name: 'Image 3', date: '22/08/2018'}
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
