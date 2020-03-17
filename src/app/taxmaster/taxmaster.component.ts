import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-taxmaster',
  templateUrl: './taxmaster.component.html',
  styleUrls: ['./taxmaster.component.css']
})
export class TaxmasterComponent implements OnInit {

  url: string = 'http://server:809/api/MTaxes';

  TaxMasterForms: FormGroup;
  taxTypes: object;
  taxMaster:object;
  btnName = "Save";

  constructor(private http:HttpClient, private myForms: FormBuilder) { }

  ngOnInit(): void {
    this.getTaxMaster();
    this.TaxMasterForms = new FormGroup({
      txId: new FormControl(),
      txDescription: new FormControl(''),
      txPercentage: new FormControl(),
      txAccountHeadId: new FormControl(),
    });

  




}

// ---------------- get TaxType ----------

getTaxMaster(){
  this.http.get(this.url).subscribe(res =>{
    this.taxMaster = res;
    console.log(res);
  });
}


// ---------- Save Tax Master ----------------- 

SaveTaxMas(){
  let data = this.TaxMasterForms.value;
 // console.log(data);
  let id = data.txId;
  if(id == null){
    let finaldata = this.taxMaster = {
      'txDescription' : data.txDescription, 
      'txPercentage' : data.txPercentage, 
      'txAccountHeadId' : data.txAccountHeadId
    }
    return this.http.post(this.url, finaldata).subscribe(res =>{
      console.log(res);
      this.getTaxMaster();
    });
  }

// --------Update Tax Master -----------

  else{
    let finaldata = this.taxMaster = {
      'txId' : data. txId, 'txDescription' : data.txDescription,
      'txPercentage' : data.txPercentage, 'txAccountHeadId' : data.txAccountHeadId
    }
    return this.http.put(this.url + '/'+ id, finaldata).subscribe(res =>{
      console.log(res);
      this.getTaxMaster();
    },
    err => {
      console.log(err.message);
    }
    );
    
  }
  
}

// ------------- Clear -----------------

ResetForm(){
  this.TaxMasterForms.reset();
}
 

//-------- Edit Tax Master ----------

  EdtTaxMas(tax){
    this.btnName = "Update"
    console.log(tax);
    this.TaxMasterForms.patchValue({
      txId: tax.txId,
      txDescription: tax.txDescription,
      txPercentage: tax.txPercentage,
      txAccountHeadId: tax.txAccountHeadId
    });
  }


 //-------- delete Tax Master ----------

  detTaxMas(id){
  //  alert("delete");
    this.http.delete(this.url + '/' + id).subscribe(
      res => {
        console.log(res);
        this.getTaxMaster();
      },
      err => {
        console.log(err.message);
      }
    );
  }
}


