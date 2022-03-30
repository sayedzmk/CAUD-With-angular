import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { APIServicessUserService } from 'src/app/services/api-servicess-user.service';
import { APIServicessService } from 'src/app/services/api-servicess.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userObject = new User();
  invalid;
  id;
  constructor(
    private apiService: APIServicessUserService,
    private router: Router,
    private route:ActivatedRoute
  ) {
    this.id=this.route.snapshot.paramMap.get('id');
    this.apiService.getById(this.id).subscribe((data)=>{
      this.userObject=data;
    })
  }

  ngOnInit(): void {}
  send(userName, userPhone, userImg) {
    if (
      (userName.errors == null && userPhone.errors == null,
      userImg.errors == null)
    ) {
      this.apiService.put(this.id,this.userObject).subscribe((data) => {
        this.router.navigateByUrl('lu');
      });
    } else {
      this.invalid = " Data is invalid";
    }
  }
}
