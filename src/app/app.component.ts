import { Component, OnInit } from '@angular/core';
import * as ApiServerActions from './api-server/store/api-server.actions';
import * as fromApp from './store/app.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private store: Store<fromApp.AppState>) {}
  ngOnInit() {
    // Get our endpoint from localstorage if it exists, otherewise this effect forwards us on to the login page.
    this.store.dispatch(new ApiServerActions.GetApiServerFromLocalstore());
  }
}
