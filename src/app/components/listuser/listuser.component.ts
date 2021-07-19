import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { CONNECTION } from 'src/app/services/global';
import { fadeIn } from 'src/app/transitions/transitions';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
  animations:[fadeIn]
})
export class ListuserComponent implements OnInit {
  users:[];
  uri;
  search;

  constructor( private restUser:RestUserService) { 
  
  }

  ngOnInit(): void {
    this.listUsers();
    this.uri = CONNECTION.URI
  }

  listUsers(){
    this.restUser.getUsers().subscribe((res:any)=>{
      if(res.users){
        this.users = res.users;
        console.log('usuarios cargados')
      }else{
        alert(res.message)
      }
    },
    error=> alert(error.error.message));
  }


}
