import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { APIServicessService } from 'src/app/services/api-servicess.service';
import { User } from 'src/app/models/user';
import { APIServicessUserService } from 'src/app/services/api-servicess-user.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css'],
})
export class ViewDataComponent implements OnInit {
  user : User;
  id;
  constructor(
    private service: APIServicessUserService,
    private route: ActivatedRoute
  ) {
    this.id=this.route.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe((data)=>{
      this.user=data;
    })
  }

  ngOnInit(): void {}
}
