import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Globals } from './app.globals';

import { reducers } from './store/app.reducers';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { ApiServerEffects } from './api-server/store/api-server.effects';
import {ApiServerModule} from './api-server/api-server.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ApiServerModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ApiServerEffects]),
    StoreRouterConnectingModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
