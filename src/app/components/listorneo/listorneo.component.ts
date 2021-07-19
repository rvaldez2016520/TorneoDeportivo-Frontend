import { Component, OnInit } from '@angular/core';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';
import { CONNECTION } from 'src/app/services/global';
import { fadeIn } from 'src/app/transitions/transitions';

@Component({
  selector: 'app-listorneo',
  templateUrl: './listorneo.component.html',
  styleUrls: ['./listorneo.component.css'],
  animations:[fadeIn]
})
export class ListorneoComponent implements OnInit {
  torneos:[];
  uri;
  search;

  constructor(private restTorneo:RestTorneoService) { }

  ngOnInit(): void {
    this.listTorneo();
    this.uri = CONNECTION.URI
  }

  listTorneo(){
    this.restTorneo.getTorneos().subscribe((res:any)=>{
      if(res.torneo){
        this.torneos = res.torneo;
        console.log('Torneos cargados')
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message));
  }

}
