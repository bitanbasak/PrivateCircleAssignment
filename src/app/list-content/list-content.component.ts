import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableData } from '../table-data';
import { faPen, faTrashAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})
export class ListContentComponent implements OnInit {
  @Output('onDetailsClicked') detailsClickedEvent = new EventEmitter<TableData>();
  @Input() tableData: Array<TableData>;
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  faShareAlt = faShareAlt;

  tableHeaders = ["Date", "List Name", "No. of Entities", "Actions"];

  constructor() { }

  ngOnInit(): void {
  }

  onDetailsClick(data: TableData) {
    this.detailsClickedEvent.emit(data);
  }

  getActionIcon(action: string) {
    if(action === 'Edit') {
      return faPen;
    } else if(action === 'Delete') {
      return faTrashAlt;
    } else {
      return faShareAlt;
    }
  }
}
