import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Authentication } from '../../services/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  files : any;

  constructor(public navCtrl: NavController, public auth: Authentication) {
    
  }

  fileChange(ev){
      this.files=ev.target.files;
  }
  Submit(){
    if(this.files.length<=0)
    console.log("no se pueden enviar archivos vacios");
    return;
  }

}
