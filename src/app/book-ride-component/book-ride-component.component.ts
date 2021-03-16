import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride-component',
  templateUrl: './book-ride-component.component.html',
  styleUrls: ['./book-ride-component.component.css'],
})
export class BookRideComponentComponent implements OnInit {
  show: boolean = false;

  tableData: {
    id: number;
    offerId: string;
    name: string;
    car: string;
    seatsLeft: number;
    pickup: string;
    destination: string;
  }[]=[
    {
      id: 1,
      offerId: "q123",
      name: "Shashank",
      car: "Hero",
      seatsLeft: 3,
      pickup: "Gotham",
      destination: "Lucknow"
    },
    {
      id: 2,
      offerId: "q1234",
      name: "Shashank ag",
      car: "Honda",
      seatsLeft: 2,
      pickup: "Lucknow",
      destination: "Gotham"
    },
    {
      id: 3,
      offerId: "qq123",
      name: "Shailesh",
      car: "Zolo",
      seatsLeft: 7,
      pickup: "Hapur",
      destination: "Lucknow"
    }
  ]

  toggleTable() {
    this.show = !this.show;
  }
  constructor() {}

  ngOnInit(): void {}
}
