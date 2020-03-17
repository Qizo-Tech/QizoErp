import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemGroupComponent} from './item-group/item-group.component';
import {HomeComponent} from './home/home.component';
import { ItemTypeComponent } from './item-type/item-type.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'ItemGroup', component: ItemGroupComponent },
  { path: 'ItemType', component: ItemTypeComponent },
  { path: 'CompanyProfile', component: CompanyProfileComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[
  HomeComponent,
  ItemGroupComponent,ItemTypeComponent
]