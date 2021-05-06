import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public url: string;

  constructor(
    private _userService: UserService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userService.getUsers().subscribe(
      response => {
        if (response.length) {
          this.users = response;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
