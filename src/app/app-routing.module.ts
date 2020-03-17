import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemGroupComponent} from './item-group/item-group.component';
import {HomeComponent} from './home/home.component';
import { ItemTypeComponent } from './item-type/item-type.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { TaxtypeComponent } from'./taxtype/taxtype.component';
import { TaxmasterComponent } from './taxmaster/taxmaster.component';
import { BrandComponent } from './brand/brand.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ItemmasterComponent } from './itemmaster/itemmaster.component';
import { PricinglevelComponent } from './pricinglevel/pricinglevel.component';
import { ItmmasterComponent } from './itmmaster/itmmaster.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserMasterComponent } from './user-master/user-master.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ItemGroup', component: ItemGroupComponent },
  { path: 'ItemType', component: ItemTypeComponent },
  { path: 'CompanyProfile', component: CompanyProfileComponent },
  { path: 'Taxtype', component: TaxtypeComponent },
  { path: 'Taxmaster', component: TaxmasterComponent },
  { path: 'Brand', component: BrandComponent },
  { path: 'Manufacturer', component: ManufacturerComponent },
  { path: 'Itemmaster', component: ItemmasterComponent },
  {path: 'Pricinglevel', component: PricinglevelComponent},
  {path: 'Itmmaster', component: ItmmasterComponent},
  {path: 'UserGroup', component: UserGroupComponent},
  {path: 'UserMaster', component: UserMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[
  HomeComponent,
  ItemGroupComponent,
  ItemTypeComponent,
  TaxtypeComponent,
  TaxmasterComponent,
  BrandComponent,
  ManufacturerComponent,
  ItemmasterComponent,
  PricinglevelComponent,
  ItmmasterComponent,
  UserGroupComponent,
  UserMasterComponent
]