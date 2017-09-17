import { Component } from '@angular/core';
import { NavController , ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { CalenderPage } from '../calender/calender';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	Username = '';
	Password = '';

  constructor(public navCtrl: NavController , public storage:Storage , public toastCtrl: ToastController , public authService: AuthProvider) {
    //Code Below For Storage
  	this.storage.ready()
  		.then(() => {
  			this.storage.set('myKey' , 10);
  		});
  }

  getRegister(){

    let credentials = {
      email: this.Username,
      password: this.Password
    };

    this.authService.login(credentials)
      .then((result) => {
        console.log(result);
        this.navCtrl.setRoot(CalenderPage);
      }, (err) => {
        console.log(err);
      });
  }

  getValues(){

    let credentials = {
      email: this.Username,
      password: this.Password
    };

    this.authService.login(credentials)
      .then((result) => {
        console.log(result);
        this.navCtrl.setRoot(CalenderPage);
      },(err) => {
        console.log(err);
      });

//Code Below For Storage
  	this.storage.get('myKey')
  		.then((data) => {
  			data = {
  				user: this.Username,
  				pass: this.Password
  			};
  			if(data != null)
  			{
          console.log(data);
  				this.toastCtrl.create({
            message : 'Hello ' + data.user + ' and ' + data.pass,
            duration: 2000,
            position: 'buttom'
          }).present();
  			}
  		});
  }

}
