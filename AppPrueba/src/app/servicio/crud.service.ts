import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  urlApi:string='https://rickandmortyapi.com/api/character';


  constructor(private http:HttpClient) {

  }

  consumoApiRyM():Observable<any>{
    return this.http.get<any>(this.urlApi,{responseType:'json'});
  }
}
