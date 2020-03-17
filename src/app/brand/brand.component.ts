import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  url: string = 'http://server:809/api/MBrands';

  BrandForms: FormGroup;
  brandname: object;
  btnName = "Save";

  constructor(private http:HttpClient, private myForms: FormBuilder) { }

  ngOnInit(): void {
    this.getBrand();
    this.BrandForms = new FormGroup({
      brndId: new FormControl(),
      brndDescription: new FormControl(''),
      brndUserId: new FormControl(1),
      brndBranchId: new FormControl(1),
    });

  }


  getBrand(){
    this.http.get(this.url).subscribe(res=>{
      this.brandname = res;
      console.log(res);
    });
  }


// --------------- Save Brand Name -------------

  SaveBrnd(){
    let data = this.BrandForms.value;
    console.log(data);
    let id = data.brndId;
    if(id==null){
      let finaldata = this.brandname = {
        'brndDescription':data.brndDescription,'brndUserId':data.brndUserId, 'brndBranchId':data.brndBranchId
      }
      console.log(finaldata);
      return this.http.post(this.url, finaldata).subscribe(res=>{
        console.log(res);
        this.getBrand();
      },
      err=>{
        console.log(err.message);
      });
    }
// ---------------- Update Brnd Name ----------------

  else{
    let finaldata = this.brandname = {
      'brndId':data.brndId, 'brndDescription':data.brndDescription,
      'brndUserId':data.brndUserId, 'brndBranchId':data.brndBranchId
    }
    return this.http.put(this.url+'/'+id, finaldata).subscribe(res=>{
      console.log(res);
      this.getBrand();
    },
    err =>{
      console.log(err.message);
    });
  } 
  }

// ------------- Reset/ Clear ------------

ResetForm(){
  this.BrandForms.reset();
}


// ------------ Edit Brand Name ------------------

  EdtBrnd(brand){
    this.btnName = "Update";
    console.log(brand);
    this.BrandForms.patchValue({
      brndId: brand.brndId, brndDescription: brand.brndDescription,
      brndUserId: brand.brndUserId, brndBranchId: brand.brndBranchId
    });
  }

// ----------- Delete Brand Name ------------------

  DetBrnd(id){
    this.http.delete(this.url + '/' + id).subscribe(res=>{
      console.log(res);
      this.getBrand();
    },
    err =>{
      console.log(err.message);
    });
  }
























}
