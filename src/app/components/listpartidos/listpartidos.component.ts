import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import { fadeIn } from 'src/app/transitions/transitions';
import { RestPartidosService } from 'src/app/services/restPartidos/rest-partidos.service';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { Partido } from 'src/app/models/partido';

@Component({
  selector: 'app-listpartidos',
  templateUrl: './listpartidos.component.html',
  styleUrls: ['./listpartidos.component.css'],
  animations:[fadeIn]
})
export class ListpartidosComponent implements OnInit {

  Partidos:[] ;
  torneos:[] = [];
  uri;
  public torneo;
  partidoSelected:Partido;
  torneoId:string;


  constructor(private restPartido:RestPartidosService , private restTorneo:RestTorneoService) { }

  ngOnInit(): void {
    this.partidoSelected = new Partido('','','',null,'',null);
    this.listPartidos();
    this.uri = CONNECTION.URI

    this.restTorneo.getTorneos().subscribe((res:any)=>{
      this.torneos = res.torneo;
      console.log(this.torneos);
    })



  }


  listPartidos(){
    this.restPartido.getPartidos().subscribe((res:any)=>{
      if(res.match){
        this.Partidos = res.match;
        console.log('Partidos Cargados')
      }else{
        alert(res.message);
      }
    },
    error=> alert(error.error.message))
  }


  obtenerData(partido){
    this.partidoSelected = partido;
   }

  updatePartido(){
    this.restPartido.updatePartido(this.torneoId, this.partidoSelected).subscribe((res:any)=>{
      if(res.matchUpdate){
        alert(res.message);
        localStorage.setItem('torneo', JSON.stringify(this.torneo));
      }else{
        alert(res.message);
        this.torneo = this.restTorneo.getTorneo();
        this.Partidos = this.torneo.partidos;
      }
    },
    error=>alert(error.error.message))
  }


  removePartdo(){
    this.restPartido.removeTorneo(this.torneoId ,this.partidoSelected._id).subscribe((res:any)=>{
      if(res.match){
        alert(res.message);
        localStorage.setItem('torneo', JSON.stringify(res.match)); 
        this.torneo = this.restTorneo.getTorneo();
        this.Partidos = this.torneo.partido;
      }else{
        alert(res.message);
      }
    },
    error=> alert(error.error.message));
  }


  
}
