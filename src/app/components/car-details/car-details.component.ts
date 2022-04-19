import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Data } from 'src/app/Interfaces/dataInterface';
import { DataModalComponent } from 'src/app/Modals/data-modal/data-modal.component';
import { GasStationService } from 'src/app/services/gas-station.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  @Input() data: any;
  myObservable: any;
  myPromise: any;
  mySubscription: any;
  userData = new Data();
  constructor(
    private modalService: BsModalService,
    private userService: GasStationService
  ) {}

  ngOnInit(): void {}

  create() {
    this.myObservable = new Observable<string>((observer) => {
      console.log('observable has created');
      observer.next('observer has emitted 1');
      observer.next('observer has emitted 2');
      observer.next('observer has emitted 3');
      observer.next('observer has emitted 4');
    });

    this.myPromise = new Promise<string>((resolve) => {
      console.log('promise has created');
      resolve('promise has emotted 2');
      resolve('promise has emotted 2');
      resolve('promise has emotted 3');
    });
  }

  execute() {
    this.mySubscription = this.myObservable.subscribe((data: any) => {
      console.log(data);
    });

    this.myPromise.then((data: any) => {
      console.log(data);
    });
  }

  close() {
    this.mySubscription.unsubscribe();
  }

  showModal() {
    this.userService.getAllGasStation().subscribe((data) => {
      this.data = data.data;
      console.log(data.data);
    });

    const initialState = {
      data: this.userData,
    };
    const ModalRef = this.modalService.show(DataModalComponent, this.userData);
  }
}
