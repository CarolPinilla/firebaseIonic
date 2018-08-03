import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import { snapshotChanges } from 'angularfire2/database';

@Injectable()

export class Uploader{
storageRef: firebase.storage.Reference;

constructor(){
    this.storageRef =firebase.storage().ref();
}

upload(file){
    let fileRef= this.storageRef.child("/images/"+file.name);
    let uploadTask = fileRef.put(file);
    return new Promise((resolve, reject)=>{
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot)=>{
        
    }, (err)=> reject(err),()=>{
        let fileUrl=uploadTask.snapshot.downloadURL;
        resolve(fileUrl);
    });
});
}

uploadMultiple(files){
    for (let i=0; i<files.length; i++){
        let file=files[i];
    }
}
}