import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServerComponent } from './api-server.component';
import { ApiServerAddressComponent } from './api-server-address/api-server-address.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ApiServerComponent, ApiServerAddressComponent]
})
export class ApiServerModule { }
