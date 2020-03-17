import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pricinglevel',
  templateUrl: './pricinglevel.component.html',
  styleUrls: ['./pricinglevel.component.css']
})
export class PricinglevelComponent implements OnInit {


  url: string = 'http://server:809/api/MpricingLevels';
  PricingLevelForms: FormGroup;
  priceLevel: object;
  btnName = "Save";
  keyword = 'plDescription';

  constructor(private http:HttpClient, private myForms: FormBuilder) { }

  ngOnInit(): void {
    this.getPrice();
    this.PricingLevelForms = new FormGroup({
      id: new FormControl(),
      plDescription: new FormControl(),
      plDiscountPercentage: new FormControl(),
      plNarration: new FormControl(),
      disamount: new FormControl(),

    });
  }

// ---------------- get price level-----------------

  getPrice(){
    this.http.get(this.url).subscribe(data=>{
      this.priceLevel = data;
      console.log(data);
    });
  }

  
  SavePrice(){
    let data = this.PricingLevelForms.value;
    console.log(data);
    let id = data.id;
    if(id == null){
      let finaldata = this.priceLevel = {
        'plDescription': data.plDescription, 'plDiscountPercentage': data.plDiscountPercentage, 
        'plNarration': data.plNarration
      }
      return this.http.post(this.url, finaldata).subscribe(data=>{
        this.Reset();
        this.getPrice();
        console.log(data);
        
      });
    }
//---------------- UpDate -------------------

    else{
      let finaldata = this.priceLevel = {
       'id': data.id, 'plDescription': data.plDescription, 
       'plDiscountPercentage': data.plDiscountPercentage, 'plNarration': data.plNarration
      }
      return this.http.put(this.url + '/' + id, finaldata).subscribe(data=>{
        console.log(data);
        this.Reset();
        this.getPrice();
      },
      err=>{
        console.log(err.message);
      });
    }
  
  }


  Reset(){
    this.PricingLevelForms.reset();
  }

  EdtPrice(price){
    this.btnName = "Update";
    this.PricingLevelForms.patchValue({
      id: price.id,
      plDescription: price.plDescription,
      plDiscountPercentage: price.plDiscountPercentage,
      plNarration: price.plNarration
    });
  }

  DetPrice(id){
    //  alert("delete");
      this.http.delete(this.url + '/' + id).subscribe(
        res => {
          this.getPrice();
          console.log(res);
        },
        err => {
          console.log(err.message);
        }
      );
    }

//  -------------------- search --------------------

    selectEvent(item) {
      // do something with selected item
    }
   
    onChangeSearch(val: string) {
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property.
    }
    
    onFocused(e){
      // do something when input is focused
    }
  
  
  
  
  
  
  
  }




