import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css'],
  imports: [CommonModule],
})
export class RoomListComponent {
  data = [
    {
      Room: 222,
      Name: 'John',
      UseCost: 700,
      PowerUse: 100,
    },
    {
      Room: 123,
      Name: 'Jane',
      UseCost: 800,
      PowerUse: 150,
    },
    {
      Room: 325,
      Name: 'Jim',
      UseCost: 750,
      PowerUse: 120,
    },
    {
      Room: 234,
      Name: 'Jack',
      UseCost: 900,
      PowerUse: 110,
    },
    {
      Room: 1233,
      Name: 'Jill',
      UseCost: 650,
      PowerUse: 130,
    },
    {
      Room: 4214,
      Name: 'Jerry',
      UseCost: 780,
      PowerUse: 140,
    },
    {
      Room: 3512,
      Name: 'Jasmine',
      UseCost: 820,
      PowerUse: 160,
    },
    {
      Room: 3,
      Name: 'Jordan',
      UseCost: 710,
      PowerUse: 115,
    },
    {
      Room: 1224,
      Name: 'Joan',
      UseCost: 760,
      PowerUse: 105,
    },
    {
      Room: 10,
      Name: 'Jerry',
      UseCost: 800,
      PowerUse: 135,
    },
  ];

  constructor() {}
}
