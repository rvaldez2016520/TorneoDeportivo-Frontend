import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestTeamService {

  public token;
  public uri;
  public equipo;

  private extractData(res:Response) {
    let body = res;
    return body || [] || {}
  }


  constructor(private http:HttpClient) { 
    this.uri = CONNECTION.URI;
  }

  getToken(){
    let token = localStorage.getItem('token');
    this.token = (token!= undefined || token != null) ? token : null;
    return token;
  }

    
  getTeam(){
    let equipo = JSON.parse(localStorage.getItem('equipo'));
    if( equipo ! = undefined || equipo != null){
      this.equipo = equipo
    }else{
      this.equipo = null;
    }
    return this.equipo;
  }


  saveTeam(idGrupo, equipo){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  let params = JSON.stringify(equipo);
  return this.http.post(this.uri+'setTeam/'+idGrupo, params , {headers:headers}).pipe(map(this.extractData));
  }

  getTeams(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": this.getToken()
    });
    return this.http.get(this.uri+'getTeams/',{headers:headers}).pipe(map(this.extractData))
  }

  updateData(idTorneo, equipo){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": this.getToken()
    });
    let params = JSON.stringify(equipo);
    return this.http.put(this.uri+idTorneo+'/updateTeam/'+equipo._id,params,{headers:headers}).pipe(map(this.extractData))
  }

  removeData(idTorneo, idTeam){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": this.getToken()
    });
    return this.http.put(this.uri+idTorneo+'/removeTeam/'+idTeam , null , {headers:headers}).pipe(map(this.extractData));
  }

  


}
