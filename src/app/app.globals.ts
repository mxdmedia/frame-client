import { Injectable } from '@angular/core';


@Injectable()
export class Globals {
  private api_server = 'http://localhost:8000';
  private api_path = '/api/v1/';

  api_endpoint_url() {
    return this.api_server+this.api_path;
  }
}
