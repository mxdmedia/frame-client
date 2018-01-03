import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ApiServerComponent } from './api-server.component';
import { ApiServerAddressComponent } from './api-server-address/api-server-address.component';


const apiServerRoutes: Routes = [
  { path: 'api-server', component: ApiServerComponent },
  { path: 'api-server/address', component: ApiServerAddressComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(apiServerRoutes)
  ],
  exports: [RouterModule]
})
export class ApiServerRoutingModule {}
