import { Component, Input } from '@angular/core';
import { TableData } from '../table-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() detailedData: TableData;
}
