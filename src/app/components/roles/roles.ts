import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})


export class Roles {
  firstName: string = "Angular tutorial" 
  angularVersion = "version 20"
  version: number = 18
  isActive: boolean = false
  currentDate: Date = new Date()
  inputType: string = "radio"
}
