import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIServicessService } from './api-servicess.service';

@Injectable({
  providedIn: 'root'
})
export class APIEmployeeService extends APIServicessService<Employee> {

  constructor(public http:HttpClient) { 
    super( "http://localhost:3000/employee",http)
  }
}
