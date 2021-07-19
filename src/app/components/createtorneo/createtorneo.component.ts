import { Component, OnInit } from '@angular/core';
import { Torneo } from 'src/app/models/torneo';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { fadeIn } from 'src/app/transitions/transitions';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-createtorneo',
  templateUrl: './createtorneo.component.html',
  styleUrls: ['./createtorneo.component.css'],
  animations:[fadeIn]
})
export class CreatetorneoComponent implements OnInit {
  torneos:[];
  torneo:Torneo;
  public token;
  public user;
  torneoSelected:Torneo;

  constructor(private restTorneo:RestTorneoService, private restUser:RestUserService, private router:Router ) { 
    this.torneo = new Torneo('','',[],[],[]);
  }

  ngOnInit(): void {
    this.torneoSelected = new Torneo('','',[],[],[]);
    this.restTorneo.getTorneos().subscribe((res:any)=>{
      this.torneos = res.torneo;
      console.log(this.torneos);
    })
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  }


  
  onSubmit(form){
    this.restTorneo.saveTorneo(this.user._id , this.torneo).subscribe((res:any)=>{
      if(res.torneoPush){
        form.reset();
        delete res.torneoPush.password;
        this.user = res.torneoPush;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.user = this.restUser.getUser(); 
        this.torneos = this.user.torneo;
      }else{
        alert(res.message);
      }
    },
    error=> alert(error.error.message))
  }

  
  obtenerData(torneo){
   this.torneoSelected = torneo;
  }


  updateTorneo(){
    this.restTorneo.updateTorneo(this.user._id, this.torneoSelected).subscribe((res:any)=>{
      if(res.ligaUpdated){
        localStorage.setItem('user', JSON.stringify(this.user));
      }else{
        alert(res.message);
        this.user = this.restUser.getUser();
        this.torneos = this.user.torneos;
      }
    },
    error => console.log(error.error.message))
  }


  deleteTorneo(){
    this.restTorneo.removeTorneo(this.user._id, this.torneoSelected._id).subscribe((res:any)=>{
      if(res.contactPull){
        localStorage.setItem('user', JSON.stringify(res.contactPull)); 
        this.user = this.restUser.getUser();
        this.torneos = this.user.torneo;
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }

}
