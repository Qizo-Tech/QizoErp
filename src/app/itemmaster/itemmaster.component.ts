import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-itemmaster',
  templateUrl: './itemmaster.component.html',
  styleUrls: ['./itemmaster.component.css']
})
export class ItemmasterComponent implements OnInit {

  list;
  ItemmasterForms: FormGroup;
  Itmaster: object;

  keyword = 'itmName';

  constructor(private http: HttpClient, private myForms:FormBuilder) { }

  ngOnInit(): void {
    this.getList();
     this.ItemmasterForms = new FormGroup({
      itmName: new FormControl(),
      Itemlist: new FormControl()
     });

  
    }


  getList(){
    this.http.get('http://server:809/api/MItemMasters').subscribe(data=>{
      this.Itmaster = data;
      console.log(data);
    });
  }



  EdtList(item){
    console.log(item);
    this.ItemmasterForms.patchValue({
      itmCode: item.itmCode,
      itmName: item.itmName,
      isgId: item.itmSubGrpId
    });
  }



  DetList(id){
    //  alert("delete");
      this.http.delete('http://server:809/api/MItemMasters' + '/' + id).subscribe(
        res => {
          console.log(res);
          this.getList();
        },
        err => {
          console.log(err.message);
        }
      );
    }

// ------------ search ---------------

// selectEvent(item){
//   console.log(item.itmName);
//   this.list = item.itmName;
// }




  Reset(){
    this.ItemmasterForms.reset();
  }























}
