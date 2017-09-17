import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthProvider } from '../../providers/auth/auth';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http , public authService: AuthProvider) {
    console.log('Hello HttpProvider Provider');
  }

  getCoachApi(){
  	return new Promise((resolve , reject) => {

  		let headers = new Headers();
  		headers.append('Authorization','Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.kHZQ03yhLOPC1c7f6CdItQbT2ljvMQLbucdJVkqwEKs');

  		this.http.get('https://mysterious-beach-83937.herokuapp.com/loggedInCoach' , {headers: headers})
  			.map(res => res.json())
  			.subscribe(data => {
  				resolve(data);
  			}, (err) => {
  				reject(err)
  			});
  	});
  }

}
