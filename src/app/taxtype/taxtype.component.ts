import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-taxtype',
  templateUrl: './taxtype.component.html',
  styleUrls: ['./taxtype.component.css']
})
export class TaxtypeComponent implements OnInit {

  url: string = "http://server:809/api/MTaxTypes";

  TaxTypeForms: FormGroup;
  taxTypes: object;
  BtnName="Save";

  constructor(private http: HttpClient, private myForms: FormBuilder) { }

  ngOnInit(): void {
    
    this.getTaxType();
    this.TaxTypeForms = new FormGroup({
      txTypId: new FormControl(),
      TypDescription: new FormControl(''),
      TypUserId: new FormControl(1),
      TypBranchId: new FormControl(1),
    });

  }

// ----------- Get Taxtype -----------

  getTaxType(){
    this.http.get(this.url).subscribe(
      response => {
        this.taxTypes = response;
        console.log(response);
      });
  }


  // ----------save-------------

  SaveTaxType() {
    let data = this.TaxTypeForms.value;
  //  console.log(data);
    let id = data.txTypId;
    if(id==null){
      let finldata = this.taxTypes = {
        'txTypDescription': data.TypDescription, 'txTypUserId': data.TypUserId, 'txTypBranchId': data.TypBranchId
      }
   //   console.log(finldata);
  
  //    console.log(this.taxTypes);
      return this.http.post(this.url,finldata).subscribe(res => {
        this.getTaxType();

      },
        err => {
          console.log(err.message);
        }
      );
    }

    //-----Update Part-----
     else{
        //  alert("else");
       let finldata = this.taxTypes = {
        'txTypId' : data.txTypId, 'txTypDescription': data.TypDescription, 'txTypUserId': data.TypUserId, 'txTypBranchId': data.TypBranchId
      }
  //    console.log(finldata);
  
  //    console.log(this.taxTypes);
      return this.http.put(this.url+'/'+id, finldata).subscribe(res => {
        console.log(res);
        this.getTaxType();
      },
        err => {
          console.log(err.message);
        }
      );
    }
  }

// ----------- Clear --------------------

  ResetForm(){
    this.TaxTypeForms.reset();
  }


  // -------------------Edit--------------------

  EdtTaxTyp(tax) {
    this.BtnName="Update"
    console.log(tax);
    this.TaxTypeForms.patchValue({
      txTypId: tax.txTypId,
      TypDescription: tax.txTypDescription,
      TypUserId: tax.txTypUserId,
      TypBranchId: tax.txTypBranchId
    });

    
  }

  
  //----------Delete------------

  deltTaxTyp(id) {

    this.http.delete(this.url + '/' + id).subscribe(
      res => {
        console.log(res);
        this.getTaxType();
      },
      err => {
        console.log(err.message);
      }
    );
  }
  






}
