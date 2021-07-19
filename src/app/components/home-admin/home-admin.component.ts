import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transitions/transitions';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
  animations:[fadeIn]
})
export class HomeAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
