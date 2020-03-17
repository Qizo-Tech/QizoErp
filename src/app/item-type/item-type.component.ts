import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.css']
})

export class ItemTypeComponent implements OnInit {
  apiRoot: string = "http://server:809/api/itemType";

  ItemTypes: object;
  ItemTypeForms: FormGroup;
  saveItemData: object;

  BtnName = "save";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItemData();
    this.ItemTypeForms = new FormGroup({
      id: new FormControl(),
      Description: new FormControl(''),
      UserId: new FormControl(1),
      BranchId: new FormControl(1),
    });
  }

  //*****get item types*****   
  getItemData() {
    this.http.get(this.apiRoot).subscribe(
      response => {
        this.ItemTypes = response;
        console.log(response);
      }
    );
  }

  //---save data---
  SaveItemType() {
    let data = this.ItemTypeForms.value;
    // console.log(data);
    let id = data.id;
    console.log(id);
    if (id == null) {
      let finaldata = this.saveItemData = {
        'Description': data.Description, 'UserId': data.UserId, 'BranchId': data.BranchId
      }
       console.log(finaldata);
       
      return this.http.post(this.apiRoot, finaldata).subscribe(
        res => {
          console.log(res);
          this.Clear();
          this.getItemData();
        },
        err => {
          console.log(err.message);
        }
      );
    }
    //********Update-Part**********
    else {
      console.log(id);
      console.log(data);
      return this.http.put(this.apiRoot + '/' + id, data).subscribe(
        res => {
          console.log(res);
          this.Clear();
          this.getItemData();
        },
        err => {
          console.log(err.message);
        }
      );
    }

  }

  //--delete----
  deltItmTyp(ids: number) {

    this.http.delete(this.apiRoot + '/' + ids).subscribe(
      res => {
        console.log(res);
        this.Clear();
        this.getItemData();
      },
      err => {
        console.log(err.message);
      }
    );
  }


  EdtItmTyp(Items) {
    this.BtnName = 'Update';
    this.ItemTypeForms.patchValue({
      id: Items.id,
      Description: Items.description,
      userId: Items.UserId,
      branchId: Items.BranchId

    });

  }

  Clear() {
    this.BtnName = 'Save';
    this.ItemTypeForms.reset()
  }
}
