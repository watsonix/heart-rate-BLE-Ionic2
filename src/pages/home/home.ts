import { Component } from '@angular/core';
import {BLE} from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
	BLE.scan([], 5).subscribe(device => {
      console.log(JSON.stringify(device));
    }, error => {
      console.log(error);
    });
  }

}
