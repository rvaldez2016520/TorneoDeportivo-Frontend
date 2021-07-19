import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';
import { Team } from 'src/app/models/equipo';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { UploadsTeamService } from 'src/app/services/uploadsTeam/uploads-team.service';
import { CONNECTION } from 'src/app/services/global';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';


@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css'],
  animations:[fadeIn]
})
export class CreateteamComponent implements OnInit {

  torneos:[]=[];
  teams:[];
  team:Team;
  public toreno;
  public token;
  public uri:string
  teamSelected:Team;
  public filesToUploadTeam:Array<File>;
  torneoId:string;

  


  constructor( private uploadTeam:UploadsTeamService , private restTeam:RestTeamService, private restTorneo:RestTorneoService ) {
    this.team = new Team('','','');
    this.uri = CONNECTION.URI;
   }

  ngOnInit(): void {
    this.teamSelected = new Team('','','');
    this.restTorneo.getTorneos().subscribe((res:any)=>{
      this.torneos = res.torneo;
      console.log(this.torneos);
    })

    this.restTeam.getTeams().subscribe((res:any)=>{
      this.teams = res.teams;
    })
  }


  onSubmit(save){
    this.restTeam.saveTeam(this.torneoId, this.team).subscribe((res:any)=>{
      if(res.teamPush){
        save.reset();
        this.team = res.teamPush;
        localStorage.setItem('team',JSON.stringify(this.team));
        this.toreno = this.restTeam.getTeams();
        this.ngOnInit();
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }


  obtenerData(team){
    this.teamSelected = team;
   }


  update(){
    this.restTeam.updateData(this.torneoId, this.teamSelected).subscribe((res:any)=>{
      if(res.teamUpdate){
        alert(res.message);
        localStorage.setItem('torneo', JSON.stringify(this.torneos));
      }else{
        alert(res.message);
        this.toreno = this.restTorneo.getTorneos();
        this.teams = this.toreno.team;
      }
    },
    error=>alert(error.error.message))
  }


  remove(){
    this.restTeam.removeData(this.torneoId , this.teamSelected._id).subscribe((res:any)=>{
      if(res.Removed){
          alert(res.message);
          localStorage.setItem('troneo', JSON.stringify(res.Removed));
          this.toreno = this.restTeam.getTeams();
          this.ngOnInit();
      }else{
        alert(res.message);
      }
    },
    error=>alert(error.error.message))
  }



  uploadImage(){
    this.uploadTeam.fileRequestTeam(this.teamSelected._id, [] , this.filesToUploadTeam, this.token, 'image')
      .then((res:any)=>{
        if(res.team){
          this.team.image = res.userImage;
          localStorage.setItem('team', JSON.stringify(this.team))
        }else{
          alert(res.message)
        }
      })
  }

  fileChange(fileInput){
    this.filesToUploadTeam = <Array<File>>fileInput.target.files;
    console.log(this.filesToUploadTeam)
  }
 
}
