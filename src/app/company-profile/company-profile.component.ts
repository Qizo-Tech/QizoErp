import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  apiRoot = "http://server:809/api/MCompanyProfiles";

  CompProForms: FormGroup;
  BtnName = "Save";
  StateList: object;
  

  CompanyProData:object;


  name:string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getstate();
    this.getCompanyPro();

    this.CompProForms = new FormGroup({
      id: new FormControl(),
      Name: new FormControl(),
      ShortName: new FormControl(),
      MailingName: new FormControl(),
      ItemType: new FormControl(),
      Address1: new FormControl(),
      Address2: new FormControl(),
      Address3: new FormControl(),
      GstNo: new FormControl(),
      PanNo: new FormControl(),
      Mobile: new FormControl(),
      ContactNo: new FormControl(),
      Email: new FormControl(),
      WEB: new FormControl(),
      BankName: new FormControl(),
      ACCNo: new FormControl(),
      Branch: new FormControl(),
      IFSC: new FormControl(),
    });

  }
  // ---------get State----
  getstate() {
    //http://server:809/api/mstates
    this.http.get("http://server:809/api/mstates").subscribe(
      response => {
        this.StateList = response;
        console.log(response);
      }
    );
  }

  //get Company Profile data
  getCompanyPro() {
    this.http.get(this.apiRoot + "/" + 1).subscribe(
      response => {
        this.CompanyProData=response;
        console.log(response);
        
      }
    );


  }

 
  // patchval() {
  //   console.log(this.CompanyProData);
  //   let data = this.CompanyProData;
  //   console.log(data);
  //   this.CompProForms.patchValue({
  //     id: new FormControl(),
  //     Name: new FormControl(1),
  //     ShortName: new FormControl(),
  //     MailingName: new FormControl(),
  //     ItemType: new FormControl(),
  //     Address1: new FormControl(),
  //     Address2: new FormControl(),
  //     Address3: new FormControl(),
  //     GstNo: new FormControl(),
  //     PanNo: new FormControl(),
  //     Mobile: new FormControl(),
  //     ContactNo: new FormControl(),
  //     Email: new FormControl(),
  //     WEB: new FormControl(),
  //     BankName: new FormControl(),
  //     ACCNo: new FormControl(),
  //     Branch: new FormControl(),
  //     IFSC: new FormControl(),
  //   });

  // }



  //---Save-----
  SaveProfile() {
    alert(1);
    console.log(this.CompProForms.value);
  }

  Clear() {
    this.BtnName = "Save";
    this.CompProForms.reset();
  }
}
