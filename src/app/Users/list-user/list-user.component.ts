import { Component, OnInit } from '@angular/core';
import { APIServicessUserService } from 'src/app/services/api-servicess-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {

  allData:any=[];
  constructor(private apiService: APIServicessUserService) {
    this.apiService.get().subscribe((data:any)=>{
      this.allData=data;
    })
  }

  ngOnInit(): void {}
  remov(id){
    this.apiService.delet(id).subscribe(data=>{
      location.reload();
    })
  }
}
