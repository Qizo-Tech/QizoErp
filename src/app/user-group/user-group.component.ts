import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  apiRoot: string = "";
 // apiRoot: string = "http://server:809/api/itemType";
  BtnName = "save";
  UserGroup:object;
  UserGrpForms:FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.getUsrGrpData();
    this.UserGrpForms=new FormGroup({
      GroupName:new FormControl()
    });
  }

    //*****get User Group*****   
    getUsrGrpData() {
      this.http.get(this.apiRoot).subscribe(
        response => {
          this.UserGroup = response;
          console.log(response);
        }
      );
    }
//save or update---
SaveUserGrp(){

}

//edit data---
edit(usrr){

}
//delete data

delete(usrr){

}
//clear--
Clear() {
  this.BtnName = 'Save';
  this.UserGrpForms.reset()
}

}
