import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestTorneoService } from '../restTorneo/rest-torneo.service';

@Injectable({
  providedIn: 'root'
})
export class RestGroupService {

  public token;
  public uri;
  public team;

  private extractData(res:Response) {
    let body = res;
    return body || [] || {}
  }



  constructor(private http: HttpClient, private restTonero:RestTorneoService ) {
    this.uri = CONNECTION.URI;
   }

   
  getTeam(){
    let team = JSON.parse(localStorage.getItem('team'));
    if(team != undefined || team != null){
      this.team = team
    }else{
      this.team = null;
    }
    return this.team;
  }


  getToken(){
    let token = localStorage.getItem('token');
    this.token = (token!= undefined || token != null) ? token : null;
    
    return token;
  }


   saveGroup(idTorneo, team){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.restTonero.getToken()
    })
    let params = JSON.stringify(team);
    return this.http.post(this.uri+'setTeam/'+idTorneo, params , {headers:headers}).pipe(map(this.extractData));
   }


   updateGroup(idTorneo,team){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    let params = JSON.stringify(team);
    return  this.http.put(this.uri+idTorneo+'/updateTeam/'+team._id,params,{headers:headers}).pipe(map(this.extractData));
   }

   removeGroup(idTorneo, team){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    }); 
    return this.http.put(this.uri+idTorneo+'/removeTeam/'+team._id,{headers:headers}).pipe(map(this.extractData))
  
   }

   getGroup(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": this.getToken()
    });
  
    return this.http.get(this.uri+'getTeams/',{headers: headers}).pipe(map(this.extractData))
   }  
}
