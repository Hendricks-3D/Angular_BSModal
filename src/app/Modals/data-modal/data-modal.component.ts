import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeepCopy } from 'src/app/functions/Util-functions';
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
  //@Input() userData = [] as Array<Data>;

  _userData = [] as Array<Data>;
  @Input() set userData(driver: Array<Data>) {
    this._userData = DeepCopy(driver);
  }
  filteredData!: Data;
  constructor() {
    console.log(this._userData);
  }

  ngOnInit(): void {}

  saveData() {
    // const dataEvent: DataEvent = {
    //   data: this.filteredData,
    // };
    this.save.emit(this.filteredData); //This will send the data to the component that opened the modal
  }
}
