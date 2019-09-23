import { Component, OnInit } from '@angular/core';
import { bikes } from '../bikes';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css'],
})
export class BikeComponent {

  bikes = bikes;
  id = 0;
  bike = bikes[this.id];
  bikestoDisplay = true;
  likedBikes = [];
  list = [];
  displayList = false;

  nextBike() {
    this.id++;
    if (this.id >= bikes.length) {
      this.bikestoDisplay = false;
    }
    this.bike = bikes[this.id];
  }

  ride(bike) {
    this.nextBike()
    this.likedBikes.push(bike.name)
  }

  noRide() {
    this.nextBike()
  }

  listBikes() {
    this.bikestoDisplay = false;
    this.displayList = true;
    this.list = this.likedBikes
  }

  retry() {
    this.id = 0;
    this.bike = bikes[this.id];
    this.bikestoDisplay = true;
    this.likedBikes = [];
    this.list;
    this.displayList = false;
  }


}

