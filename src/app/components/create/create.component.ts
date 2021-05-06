import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Global } from 'src/app/services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [UserService]
})
export class CreateComponent implements OnInit {
  public user: User;
  public url: string;
  public title: string;

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.url = Global.url;
    this.user = new User('', '', '', '', '', '');
    this.title = 'Create contact'
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._userService.saveUser(this.user).subscribe(
      response => {
        if (response) {
          this._router.navigate(["users"]);
          /* Para mensajes de "Usuario creado" */
          //this.save_user = response.user;
          //this.status = 'success';
        } else {
          //this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
