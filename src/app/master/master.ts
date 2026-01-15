import { Component } from '@angular/core';
import { Designation } from '../components/designation/designation';
import { Roles } from '../components/roles/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [Designation,Roles,CommonModule],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master {
  currentComponent: string = "Roles"

  changeTab( tabName: string){
    this.currentComponent= tabName
  }
}
