import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
<<<<<<< HEAD:src/app/service.service.ts
=======
import { User } from '../auth/user';
>>>>>>> b70b45c... admin+ modal produit:src/app/service/service.service.ts

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
<<<<<<< HEAD:src/app/service.service.ts
  createProduit(produit): Observable<any>{
=======

      optionsIm={
        headers: new HttpHeaders().append('Content-Type', 'image/png')
      }

    httpfileOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'multipart/form-data'
        })
      }
  createProduit(formData:FormData): Observable<any>{
>>>>>>> b70b45c... admin+ modal produit:src/app/service/service.service.ts
    return this.http
    .post<any>(this.base_path+"/add",JSON.stringify(produit),this.httpOptions)
    
    
  }
  getAllstudents(): Observable<any>{
    return this.http
    .get<any>(this.base_path,this.httpOptions) 
  }
<<<<<<< HEAD:src/app/service.service.ts
  deleteStudents(id): Observable<any>{
    return this.http
    .delete<any>(this.base_path+'/'+id,this.httpOptions) 
  }
=======
  
  public loginUser(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8081/daddesh/authenticate",user,this.httpOptions)
  }
  public registerUser(formData:FormData):Observable<any>{
    return this.http.post<any>("http://localhost:8081/daddesh/user/regg",formData)
  }
  getAll(): Observable<any> {
    return this.http.get(this.base_path+"/");
  }
  getFromLocalStorage(): Observable<any> {
    return JSON.parse(localStorage.getItem('produits'));

  }
  
  public getImages(id):Observable<any>{
    return this.http.get<any>(this.base_path+'/findImage/'+id+'/'+2,this.optionsIm)
  }
  
>>>>>>> b70b45c... admin+ modal produit:src/app/service/service.service.ts

 
}
