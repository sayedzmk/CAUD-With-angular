import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { APIServicessService } from 'src/app/services/api-servicess.service';
import { Router } from '@angular/router';
import { APIServicessUserService } from 'src/app/services/api-servicess-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userObject = new User();
  invalid;
  constructor(
    private apiService: APIServicessUserService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  send(userName, userPhone, userImg) {
    if (
      (userName.errors == null && userPhone.errors == null,
      userImg.errors == null)
    ) {
      this.apiService.post(this.userObject).subscribe((data) => {
        this.router.navigateByUrl('lu');
      });
    } else {
      this.invalid = " Data is invalid";
    }
  }
}
