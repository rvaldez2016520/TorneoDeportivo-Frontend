import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { fadeIn } from 'src/app/transitions/transitions';
import { Router } from '@angular/router';
import { UploadsService } from 'src/app/services/uploads/uploads.service';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  animations:[fadeIn]
})
export class PerfilComponent implements OnInit {

    public title: string;
    public user:User;
    public token;
    public possiblePass;
    public filesToUpload:Array<File>;
    public uri:string

  constructor(private restUser:RestUserService, 
            private router:Router, 
            private uploadUser:UploadsService) { 
    this.title = 'Your Data Update';
    this.possiblePass = '';
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    delete this.user.password;
    delete this.user.role;
   this.restUser.updateUser(this.user).subscribe((res:any)=>{
    if(res.userUpdate){
      delete res.userUpdate.password;
      localStorage.setItem('user', JSON.stringify(res.userUpdate));
    }else{
      alert(res.message);
      this.user = this.restUser.getUser();
    }
   },error=> alert(error.error.message));
  }

  deleteUser(){
    this.restUser.deleteUser(this.user._id, this.possiblePass).subscribe((res:any)=>{
      if(!res.userRemoved){
        alert(res.message);
      }else{
        alert(res.message);
        localStorage.clear();
        this.router.navigateByUrl('home');
      }
    },
    error => alert(error.error.message))
  }


  uploadImage(){
    this.uploadUser.fileRequest(this.user._id, [], this.filesToUpload, this.token, 'image')
      .then((res:any)=>{
        if(res.user){
          this.user.image = res.userImage;
          localStorage.setItem('user', JSON.stringify(this.user))
        }else{
          alert(res.message)
        }
      })
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload)
  }

}
