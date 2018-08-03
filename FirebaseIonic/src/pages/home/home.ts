import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Authentication } from '../../services/authentication';
import { Uploader } from '../../services/files';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  files : any;

  constructor(public navCtrl: NavController, public auth: Authentication, public Uploader: Uploader) {
    
  }

  fileChange(ev){
      this.files=ev.target.files
      
  }
  Submit(){
    if(this.files.length<=0)
    console.log("no se pueden enviar archivos vacios");
    this.Uploader.uploadMultiple(this.files);
  }

}
