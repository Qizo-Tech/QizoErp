import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  url: string = 'http://server:809/api/MManufacturers';

  ManufacturerForms: FormGroup;
  mfrdesc: object;
  btnName = "Save";

  constructor(private http:HttpClient, private myForms: FormBuilder) { }

  ngOnInit(): void {
    this.getManuftr();
    this.ManufacturerForms = new FormGroup({
      mfrId: new FormControl(),
      mfrDescription: new FormControl(),
      mfrUserId: new FormControl(1),
      mfrBranchId: new FormControl(1)
    });

  }

  
// ------------- Get mfr name -------------------
  getManuftr(){
    this.http.get(this.url).subscribe(res=>{
      console.log(res);
      this.mfrdesc = res;
    });
  }


  
// ---- Save mfr ------------
SaveMfr(){
  let data = this.ManufacturerForms.value;
  console.log(data);
  let id = data.mfrId;
  if(id==null){
 //   alert("if case");
    let finaldata = this.mfrdesc = {
      'mfrDescription': data.mfrDescription, 'mfrUserId': data.mfrUserId, 'mfrBranchId':data.mfrBranchId
    }
    console.log(finaldata);
    return this.http.post(this.url, finaldata).subscribe(res=>{
      console.log(res);
      this.getManuftr();
    },
    err=>{
      console.log(err.message);
    });
  }
// ---------------- Update Brnd Name ----------------

  else{
  //  alert("else case");
    let finaldata = this.mfrdesc = {
      'mfrId': data.mfrId, 'mfrDescription': data.mfrDescription,
      'mfrUserId': data.mfrUserId, 'mfrBranchId': data.mfrBranchId
    }
    return this.http.put(this.url+'/'+id, finaldata).subscribe(res=>{
      console.log(res);
      this.getManuftr();
    },
    err =>{
      console.log(err.message);
    });
  } 
}

// ---------- Reset -----------

Reset(){
  this.ManufacturerForms.reset();
}


// -------- Edit ---------

  EdtMfr(mfr){
    this.btnName = "Update";
    this.ManufacturerForms.patchValue({
      mfrId: mfr.mfrId, mfrDescription: mfr.mfrDescription,
      mfrUserId: mfr.mfrUserId, mfrBranchId:mfr.mfrBranchId
    });
  }

// -------- Delete ----------------

  DetMfr(id){
    this.http.delete(this.url + '/' + id).subscribe(res=>{
      console.log(res);
      this.getManuftr();
    },
    err=>{
      console.log(err.message);
    });
  }


  
}
