import { APIEmployeeService } from './../services/api-employee.service';
import { Employee } from './../models/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeObj= new Employee();
  editempObj= new Employee();
  allData:any=[];
  invalid;
  id;


  noneError  = "none";
  constructor(private apiEmp:APIEmployeeService, private route:ActivatedRoute ,
    private router:Router) {
    this.apiEmp.get().subscribe((data:any)=>{
      this.allData=data;
    })
    this.id=this.route.snapshot.paramMap.get('id');
    this.apiEmp.getById(this.id).subscribe((data)=>{
      this.editempObj=data;
    })
  }

  ngOnInit(): void {}
  send(firstName, lastName, email,mobile,salary) {
    if (
      (firstName.errors == null && lastName.errors == null,
        email.errors == null,mobile.errors == null,salary.errors == null)
    ) {
      this.apiEmp.post(this.employeeObj).subscribe((data) => {
        location.reload();
      });
    } else {
      this.invalid = " Data is invalid";
    }
  }
      
  remov(id){
    this.apiEmp.delet(id).subscribe(data=>{
      location.reload();
    })
  }
  eidt(firstName, lastName, email,mobile,salary){
    if (
      (firstName.errors == null && lastName.errors == null,
        email.errors == null,mobile.errors == null,salary.errors == null)
    ) {
      this.apiEmp.put(this.id,this.editempObj).subscribe((data) => {
        this.router.navigateByUrl('em'); 
        location.reload();
      });
    } else {
      this.invalid = " Data is invalid";
    }
  }




}
