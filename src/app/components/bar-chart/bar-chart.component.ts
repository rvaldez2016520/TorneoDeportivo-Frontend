import { Component, OnInit } from '@angular/core';
import { RestPartidosService } from 'src/app/services/restPartidos/rest-partidos.service';
import { RestTorneoService } from 'src/app/services/restTorneo/rest-torneo.service';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  shuffeData(){}
  


}
