import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})


export class Roles implements OnInit {
  http = inject(HttpClient);
  firstName: string = "Angular tutorial" 
  angularVersion = "version 20"
  version: number = 18
  isActive: boolean = false
  currentDate: Date = new Date()
  inputType: string = "radio"
  selectedState: string = ""
  roleList: IRole [] = []

  showWelcomeAlert(){
    alert("welcome to angular")
  }

  showMessage(message: string){
    alert(message)
  }

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles(){
    this.http.get('/api/ClientStrive/GetAllRoles').subscribe((res:any)=>{
      this.roleList = res.data
    })
  }
}
