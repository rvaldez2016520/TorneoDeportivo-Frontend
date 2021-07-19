import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestResultService {

  public token;
  public uri;
  public result;

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

  setResult(idMatch,result){
    let headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(result);
    return this.http.post(this.uri+'crearResult/'+idMatch,params,{headers:headers}).pipe(map(this.extractData))
  }

}
