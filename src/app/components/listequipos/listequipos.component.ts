import { Component, OnInit } from '@angular/core';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-listequipos',
  templateUrl: './listequipos.component.html',
  styleUrls: ['./listequipos.component.css']
})
export class ListequiposComponent implements OnInit {

  Teams:[];
  uri;

  constructor(private restTeam:RestTeamService) { }

  ngOnInit(): void {
    this.listTeams();
    this.uri = CONNECTION.URI;
  }

  listTeams(){
    this.restTeam.getTeams().subscribe((res:any)=>{
      if(res.teams){
        this.Teams = res.teams;
        console.log(this.Teams);
      }else{
        alert(res.message)
      }
    },
    error=> alert(error.erro.message));
  }


}
