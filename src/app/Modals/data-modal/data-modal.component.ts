import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/Interfaces/dataInterface';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss'],
})

// export interface DataEvent {
//   data: Data;
// }
export class DataModalComponent implements OnInit {
  @Output() save = new EventEmitter<Data>();
  @Input() data = [] as Array<Data>;
  filteredData!: Data;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  saveData() {
    // const dataEvent: DataEvent = {
    //   data: this.filteredData,
    // };
    this.save.emit(this.filteredData); //This will send the data to the component that opened the modal
  }
}
