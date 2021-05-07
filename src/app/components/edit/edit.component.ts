import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Global } from 'src/app/services/global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService]
})
export class EditComponent implements OnInit {
  public user: User;
  public url: string;
  public title: string;
  public status: string;
  public message: string;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.title = 'Edit contact'
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getUser(id);
    })
  }

  getUser(id) {
    this._userService.getUserById(id).subscribe(
      response => {
        this.user = response;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form: any) {
    this._userService.updateUser(this.user).subscribe(
      response => {
        if(response) {
          this._router.navigate(['users']);
        }
      },
      error => {
        console.log(<any>error);
        this.status = 'failed';
        this.message = error.error.message;
      }
    );
  }

}
