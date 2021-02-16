import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-filters-toolbar',
  templateUrl: './test-filters-toolbar.component.html',
  styleUrls: ['./test-filters-toolbar.component.scss']
})
export class TestFiltersToolbarComponent implements OnInit {

  @Output() activeToolbar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  collapseToolbar(){
    this.activeToolbar.emit("");
  }

}