import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import * as apiServerActions from '../store/api-server.actions';

@Component({
  selector: 'app-api-server-address',
  templateUrl: './api-server-address.component.html',
  styleUrls: ['./api-server-address.component.css']
})
export class ApiServerAddressComponent implements OnInit, OnDestroy {
  @ViewChild('f') eaForm: NgForm;
  subscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('apiServer')
      .subscribe (
        data => {
          if(data.apiServerAddress != null) {
            this.eaForm.setValue({
              apiServerAddress: data.apiServerAddress
            });
          }
        }
      );
  }

  onSubmit(form: NgForm) {
    localStorage.setItem('apiServerAddress', form.value.apiServerAddress);
    this.store.dispatch(new apiServerActions.GetApiServerFromLocalstore());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
