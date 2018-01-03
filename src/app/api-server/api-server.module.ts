import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServerComponent } from './api-server.component';
import { ApiServerAddressComponent } from './api-server-address/api-server-address.component';
import {FormsModule} from '@angular/forms';
import {ApiServerRoutingModule} from './api-server-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApiServerRoutingModule
  ],
  declarations: [
    ApiServerComponent,
    ApiServerAddressComponent
  ]
})
export class ApiServerModule { }
