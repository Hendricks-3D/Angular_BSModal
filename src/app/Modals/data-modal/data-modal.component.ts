import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/Interfaces/dataInterface';

export interface DataEvent {
  data: Data;
}
@Directive()
export class DataModalComponent implements OnInit {
  @Output() save = new EventEmitter<DataEvent>();
  @Input() data = '';
  filteredData!: Data;
  constructor() {}

  ngOnInit(): void {}

  saveData() {
    const dataEvent: DataEvent = {
      data: this.filteredData,
    };
    this.save.emit(dataEvent); //This will send the data to the component that opened the modal
  }
}
