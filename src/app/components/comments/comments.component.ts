import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/Interfaces/dataInterface';
import { GasStationService } from 'src/app/services/gas-station.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  title = 'CheckPoint';
  data: Array<Data> = [];
  constructor(
    private gasStationService: GasStationService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getAllGasStation();
  }
  getAllGasStation() {
    this.gasStationService.getAllGasStation().subscribe((dataList) => {
      this.data = dataList.data;
      console.log(
        this.data.filter((val) => {
          return val.id > 9;
        })
      );
    });
  }

  navigate() {
    this.router.navigateByUrl('');
  }
}
