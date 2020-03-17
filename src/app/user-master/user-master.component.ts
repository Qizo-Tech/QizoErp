import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {
  UserMasterForms:FormGroup;

  BtnName ="Save";

  constructor() { }

  ngOnInit(): void {
    this.UserMasterForms = new FormGroup({
      GroupName: new FormControl(),
      UserName: new FormControl(''),
      Password: new FormControl(''),
      Name: new FormControl(''),
      Address1: new FormControl(),
      Address2: new FormControl(),
      Address3: new FormControl(),
      Phone: new FormControl(),
    });
  } 

  //save---
  
  SaveUserMaster(){
//alert("save");

  }
  //Edit--
 Edit(){

 }
  //Delete--
  Delete(){

  }
  //Clear
  Clear(){
    this.UserMasterForms.reset();
  }
}
