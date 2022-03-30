import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class APIServicessService<type> {
  // configUrl="http://localhost:3000/users"
  constructor( public configUrl:string,public http:HttpClient) { }

  get():Observable<type>{
    return this.http.get<type>(this.configUrl);
  }
  getById(id):Observable<type>{
    return this.http.get<type>(this.configUrl+`/${id}`);
  }
  post(object):Observable<type>{
    return this.http.post<type>(this.configUrl,object);
  }
  put(id,object):Observable<type>{
    return this.http.put<type>(this.configUrl+`/${id}`,object)
  }
  delet(id):Observable<type>{
    return this.http.delete<type>(this.configUrl+`/${id}`);
  }
}
