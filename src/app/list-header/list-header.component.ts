import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faListUl, faFilter, faHistory } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent {
  @Output() onSearchTermSubmit = new EventEmitter<string>();

  faListUl = faListUl;
  faFilter = faFilter;
  faHistory = faHistory;

  onSearchSubmit(searchForm: NgForm) {
    this.onSearchTermSubmit.emit(searchForm.form.value.searchTerm);
  }
}
