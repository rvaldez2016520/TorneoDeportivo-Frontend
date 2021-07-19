import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestPartidosService {

  public token;
  public uri;
  public partido;

  
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

  getPartido(){
    let partido = JSON.parse(localStorage.getItem('partido'));
    if( partido ! = undefined || partido != null){
      this.partido = partido
    }else{
      this.partido = null;
    }
    return this.partido;
  }

  savePartido( idTorneo, partido){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(partido);
    return this.http.post(this.uri+'createPartido/'+idTorneo,params,{headers:headers}).pipe(map(this.extractData));
  }

  getPartidos(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": this.getToken()
    });
    return this.http.get(this.uri+'getPartidos/',{headers:headers}).pipe((map(this.extractData)));
  }

  updatePartido(idTorneo,partido){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": this.getToken()
    });
    let params = JSON.stringify(partido);
    return this.http.put(this.uri+idTorneo+'/SetGoals/'+partido._id,params,{headers:headers}).pipe(map(this.extractData));
  }

  
  removeTorneo(idTorneo , idPartido ){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.put(this.uri+idTorneo+'/finalizacionPartido/'+idPartido,null,{headers:headers}).pipe(map(this.extractData));      
  }



}
