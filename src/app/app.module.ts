import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule}from '@angular/forms';

import{AutocompleteLibModule} from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ItemTypeComponent } from './item-type/item-type.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

import { TaxtypeComponent } from './taxtype/taxtype.component';
import { TaxmasterComponent } from './taxmaster/taxmaster.component';
import { BrandComponent } from './brand/brand.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ItemmasterComponent } from './itemmaster/itemmaster.component';
import { PricinglevelComponent } from './pricinglevel/pricinglevel.component';

import { ItmmasterComponent } from './itmmaster/itmmaster.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserMasterComponent } from './user-master/user-master.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemGroupComponent,
    HomeComponent,
    NavBarComponent,
    ItemTypeComponent,
    SideNavComponent,
    CompanyProfileComponent,
    TaxtypeComponent,
    TaxmasterComponent,
    BrandComponent,
    ManufacturerComponent,
    ItemmasterComponent,
    PricinglevelComponent,
    ItmmasterComponent,
    UserGroupComponent,
    UserMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
