import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


interface Age {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selectedValue: string;
  selectedAge: string;


  age: Age[] = [
    {value: 'ten', viewValue: 'Ten'},
    {value: 'twenty', viewValue: 'Twenty'},
    {value: 'therty', viewValue: 'Therty'},
    {value: 'fourty', viewValue: 'Fourty'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
