import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-save-user-by-admin',
  templateUrl: './save-user-by-admin.component.html',
  styleUrls: ['./save-user-by-admin.component.css'],
  animations:[fadeIn]
})
export class SaveUserByAdminComponent implements OnInit {
public user:User;
public optionsRole = ['ROLE_ADMIN', 'ROLE_USER'];
public userLogg;
public token;

  constructor( private restUser:RestUserService ) { 
    this.user = new User('','','','','','','','',[]);
    this.token = this.restUser.getToken();
    this.userLogg = this.restUser.getUser();
  }

  ngOnInit(): void {
  }


  onSubmit(statusForm){
    this.restUser.saverUserByAdmin(this.user, this.userLogg._id).subscribe((res:any)=>{
      if(res.userSavedAdmin){
        alert(res.message);
        this.user = new User('','','','','','','','',[]);
        statusForm.reset();
      }else{
        alert(res.message)
      }
    },
    error=> alert(error.error.message))
  }

}
