import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { APIServicessService } from './api-servicess.service';

@Injectable({
  providedIn: 'root'
})
export class APIServicessUserService extends APIServicessService<User>{

  constructor(public http:HttpClient) { 
    super("http://localhost:3000/users",http)
  }
}
