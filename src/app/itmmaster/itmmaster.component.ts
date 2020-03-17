import { Component, OnInit, ɵConsole } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-itemmaster',
  templateUrl: './itmmaster.component.html',
  styleUrls: ['./itmmaster.component.css']
})
export class ItmmasterComponent implements OnInit {

  sugrp;
  id;
  stck;
  prdt;
  unit;
  brnd;
  mfrtr;
  gdwn;
 

  ItmmasterForms: FormGroup;
  SubGrp: Object;
  Unit: object;
  Stock: object;
  Product: object;
  mfrdesc: object;
  brandname: object;
  Godown: object;
  Itmaster: object;


  keyword1 = 'isgDescription';
  keyword2 = 'stockType';
  keyword3 = 'productType';
  keyword4 = 'description';
  keyword5 = 'mfrDescription';
  keyword6 = 'brndDescription';
  keyword7 = 'gdnInch_Name';



  constructor(private http: HttpClient, private myForms:FormBuilder) { }

  ngOnInit(): void {
    
     this.ItmmasterForms = new FormGroup({
      isgDescription:new FormControl(),
      itmCode: new FormControl(),
      itmName:new FormControl(),
      itmPrintCaption: new FormControl(),
      stockType: new FormControl(),
      productType: new FormControl(),
      description:new FormControl(),mfrDescription: new FormControl(),
      brndDescription: new FormControl(),gdnInch_Name: new FormControl(),
      itmRol: new FormControl(),itmRoq: new FormControl(),
      itmMinQty: new FormControl(),itmMaxQty: new FormControl(),
      itmWarrantyInMonths: new FormControl(),itmBarCode: new FormControl(),
      itmDescription: new FormControl(),itmOpeningStock: new FormControl(),
      itmSpecification: new FormControl(),itmHsn: new FormControl(),
      itmModel: new FormControl(),itmMonthlyTarget: new FormControl()
     })


// -------- Sub Grp ----------

  this.http.get('http://server:809/api/MItemSubGroups').subscribe(data =>{
    this.SubGrp = data;
    console.log(data);
  });

// ------ Stock ------------------

  this.http.get('http://server:809/api/MStockTypeStatics').subscribe(data=>{
    this.Stock = data;
    console.log(data);
  });

// --------- Product ----------------

  this.http.get('http://server:809/api/MProductTypeStatics').subscribe(data=>{
    this.Product = data;
    console.log(data);
  })

// --------- Unit ---------------

  this.http.get('http://server:809/api/MUnitMasters').subscribe(data=>{
    this.Unit = data;
    console.log(data);
  });

// ------------- Manufacturer ------------

  this.http.get('http://server:809/api/MManufacturers').subscribe(data=>{
    this.mfrdesc = data;
    console.log(data);
  });

// ------ Brand --------------

  this.http.get('http://server:809/api/MBrands').subscribe(data=>{
    this.brandname = data;
    console.log(data);
  });

// ---------- Godown ---------------------

  this.http.get('http://server:809/api/mGodownInCharges').subscribe(data=>{
    this.Godown = data;
    console.log(data);
  });

  }

// ------------Save ----------------------------------------

  SaveMaster(){
   
    let data = this.ItmmasterForms.value;
    console.log(data);
    console.log(this.sugrp);
    let finaldata = this.Itmaster = {
      'isgDescription': this.sugrp,
      'isgId': this.id,
      'stockType': this.stck,'productType': this.prdt,'description': this.unit,
      'mfrDescription': this.mfrtr,'brndDescription': this.brnd,'gdnInch_Name': this.gdwn,
      'itmCode': data.itmCode,'itmName': data.itmName,
      'itmPrintCaption': data.itmPrintCaption,'itmRol': data.itmRol,'itmRoq': data.itmRoq,
      'itmMinQty': data.itmMinQty, 'itmMaxQty': data.itmMaxQty,
      'itmWarrantyInMonths': data.itmWarrantyInMonths, 'itmBarCode': data.itmBarCode,
      'itmDescription': data.itmDescription,
      'itmOpeningStock': data.itmOpeningStock,
      'itmSpecification': data.itmSpecification,
      'itmHsn':data.itmHsn,
      'itmModel': data.itmModel,
      'itmMonthlyTarget': data.itmMonthlyTarget
    }
    return this.http.post('http://server:809/api/MItemMasters', finaldata).subscribe(data=>{
      console.log(finaldata);
    });
  }


// ------------------- Search -------------------------

  selectEventSubGrp(item) {
    console.log(item.isgDescription);
     this.sugrp = item.isgDescription;
     let id = item.isgId;
     console.log(id);
     
  }


// ------------------ Stock ------------------

  selectEventStck(item){
    console.log(item.stockType);
    this.stck = item.stockType;
  }

// ---------- prdt ---------------
  
  selectEventPrdt(item){
    console.log(item.productType);
    this.prdt = item.productType;
  }

// ---------- Unit -------------
  selectEventUnit(item){
  console.log(item.description);
  this.unit = item.description;
}

// ----------- Mfrtr -------------------  

  
  selectEventMfr(item){
    console.log(item.mfrDescription);
    this.mfrtr = item.mfrDescription;
  }

// ----------- brand ------------ 

  selectEventBrnd(item){
    console.log(item.brndDescription);
    this.brnd = item.brndDescription;
  }

  // ----------- Godown -------------
  
  selectEventGdwn(item){
    console.log(item.gdnInch_Name);
    this.gdwn = item.gdnInch_Name;
  }


  




























}















