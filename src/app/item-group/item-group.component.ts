import { Component, OnInit } from '@angular/core';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.css']
})
export class ItemGroupComponent implements OnInit {
  
  apiRoot: string = "http://server:809/api/MItemGroups";

  ItmGroupList: object;
  ItemTypes: object;
  ItemGroups: object;

  btnName = "Save";

  ItemGrpForms: FormGroup;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItemType();
    this.getItemGroup();

    this.ItemGrpForms = new FormGroup({
      igId: new FormControl(),
      ItemTypeId: new FormControl(''),
      ItemType: new FormControl(''),
      Description: new FormControl(''),
      UserId: new FormControl(1),
      BranchId: new FormControl(1),
    });

  }

  //--get Item Type data--
  getItemType() {
    this.http.get('http://server:809/api/itemtype').subscribe(
      response => {
        this.ItemTypes = response;
      }
    );
  };

  //--get item Group Data--
  getItemGroup() {
    this.http.get("http://server:809/api/MItemGroups").subscribe(
      response => {
        this.ItemGroups = response;
        console.log(response);
      }
    );
  };

  // save Item Group---
  SaveItemGroup() {
    let data = this.ItemGrpForms.value;
    console.log(data);
    let id = data.igId;
    console.log(id);
    if (id == null) {
      //  alert("save");
      let finaldata = {
        'igDescription': data.Description, 'igItemTypeId': data.ItemType,
        'igUserId': data.UserId, 'igBranchId': data.BranchId
      }
      console.log(finaldata);
      return this.http.post('http://server:809/api/MItemGroups', finaldata).subscribe(
        res => {
          this.Clear();
          this.getItemGroup();
          console.log(res);
        },
        err => {
          console.log(err.message);
        }
      );
    }
    else {
      //  alert("update");
      let finaldata = {
        'igId': data.igId, 'igDescription': data.Description, 'igItemTypeId': data.ItemType,
        'igUserId': data.UserId, 'igBranchId': data.BranchId
      }
      console.log(finaldata);

      return this.http.put(this.apiRoot + '/' + id, finaldata).subscribe(
        res => {
          this.Clear();
          this.getItemGroup();
          console.log(res);
        },
        err => {
          console.log(err.message);
        }
      );

    }


  }



  deltItmGrp(id) {
    this.http.delete(this.apiRoot + '/' + id).subscribe(
      res => {
        console.log(res);
        this.Clear();
        this.getItemGroup();
      },
      err => {
        console.log(err.message);
      }
    );
  }

  EdtItmGrp(grps) {
    this.btnName = "Update";

    this.ItemGrpForms.patchValue({
      igId: grps.igId,
      ItemType: grps.igItemTypeId,
      Description: grps.igDescription,
      UserId: grps.igUserId,
      BranchId: grps.igBranchId
    });
  }
  Clear() {
    this.btnName = "Save";
    this.ItemGrpForms.reset();
  }
}