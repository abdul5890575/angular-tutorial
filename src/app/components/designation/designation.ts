import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import { APIResponseModal,IDesignation } from '../model/interface/role'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})

export class Designation implements OnInit {

  masterService = inject(Master)
  designationList: IDesignation[] =[]

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:APIResponseModal)=>{
      this.designationList=result.data
    },error=>{
      alert("API Error")
    })
  }

}
