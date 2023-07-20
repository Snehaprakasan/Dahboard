import { Component } from '@angular/core';

interface Options {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent  {
  selectedValue: string ='This month';
  isExpanded: boolean = false;
  selectedItemName: string = 'Dash Board';
  

  constructor() {}

  onMenuItemClick(name: string) {
    this.selectedItemName = name;
  }

  options: Options[] = [
    {value: 'This month', viewValue: 'This month'},
    {value: 'This week', viewValue: 'This week'},
    {value: 'This year', viewValue: 'This year'},
    {value: 'Today', viewValue: 'Today'},
  ];

}
