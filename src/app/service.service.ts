import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  base_path="http://localhost:8081/daddesh/produit"
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
  createProduit(produit): Observable<any>{
    return this.http
    .post<any>(this.base_path+"/add",JSON.stringify(produit),this.httpOptions)
    
    
  }
  getAllstudents(): Observable<any>{
    return this.http
    .get<any>(this.base_path,this.httpOptions) 
  }
  deleteStudents(id): Observable<any>{
    return this.http
    .delete<any>(this.base_path+'/'+id,this.httpOptions) 
  }

}
