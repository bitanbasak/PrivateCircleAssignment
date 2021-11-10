import { Component } from '@angular/core';
import { TableData } from './table-data';

const data: Array<TableData> = [
  {
    id: '1',
    date: "July 23",
    listName: "Test List",
    entities: ['Infosys Limited', 'Wow Momo Foods Private Limited', 'Lendingkart Technologies Private Limited'],
    actions: ['faShareAlt', 'faPen', 'faTrashAlt'],
    description: ''
  },
  {
    id: '2',
    date: "September 1",
    listName: "Two Companies",
    entities: ['Delhivery Private Limited', 'Lendingkart Technologies Private Limited'],
    actions: ['faPen', 'faTrashAlt'],
    description: ''
  },
  {
    id: '3',
    date: "November 11",
    listName: "To_Index",
    entities: ['Balaji Wafers Private Limited', 'Wow Momo Foods Private Limited', 'Lendingkart Technologies Private Limited'],
    actions: ['faShareAlt', 'faPen', 'faTrashAlt'],
    description: ''
  },
  {
    id: '4',
    date: "January 19",
    listName: "Custom",
    entities: ['Infosys Limited', 'Vodafone Idea Limited', 'Lendingkart Technologies Private Limited', 'Puma Sports India Private Limited'],
    actions: ['faPen', 'faTrashAlt'],
    description: ''
  },
  {
    id: '5',
    date: "September 30",
    listName: "Companies",
    entities: ['Lendingkart Technologies Private Limited'],
    actions: ['faPen', 'faTrashAlt'],
    description: ''
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailedData: TableData;
  tableData: Array<TableData> = data;

  matchedSearchData: Array<TableData> = [];

  onDetailsClicked(event: TableData) {
    this.detailedData = event;
  }

  onSearchSubmit(searchTerm: string) {
    this.matchedSearchData = this.tableData.filter(data => data.listName.includes(searchTerm));
  }
}
