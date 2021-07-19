import { Component, OnInit } from '@angular/core';
import { RestPartidosService } from 'src/app/services/restPartidos/rest-partidos.service';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { fadeIn } from 'src/app/transitions/transitions';
import { Partido  } from 'src/app/models/partido';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-createpartidos',
  templateUrl: './createpartidos.component.html',
  styleUrls: ['./createpartidos.component.css'],
  animations:[fadeIn]
})
export class CreatepartidosComponent implements OnInit {


  torneos:[];
  partidos:[];
  teams:[];
  partido:Partido;
  public grupo;
  public torneo;
  public token;
  public optionsJosnada = [];
  partidoSelected:Partido;
  torneoId:string;



  constructor( private restMatch:RestPartidosService, private restTeam:RestTeamService, private restTorneo:RestTorneoService) { 
    this.partido = new Partido('','','',null,'',null);
  }

  ngOnInit(): void {
    this.restTorneo.getTorneos().subscribe((res:any)=>{
      this.torneos = res.torneo;
      console.log(this.torneos);
    })

    this.restMatch.getPartidos().subscribe((res:any)=>{
      this.partidos = res.partidos
      console.log(this.partido);
    })
  
  
  }

  onSubmit(save){
      this.restMatch.savePartido(this.torneoId, this.partido).subscribe((res:any)=>{
        if(res.Push){
          save.reset();
          this.torneo = res.Push;
          localStorage.setItem('partido',JSON.stringify(this.torneo));
           this.torneo = this.restTorneo.getTorneos ();
           this.partidos = this.torneo.partido;
        }else{
          alert(res.message)
        }
      },
      error=>alert(error.error.message))
  }

  sendTeamInfo(partido:Partido){
    localStorage.setItem('partido',JSON.stringify(this.partido)!);
  }


}
