import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Global } from 'src/app/services/global';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public user: User;
  public url: string;
  public pageActual: number;
  public title: string;
  public returnToContacts: boolean;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private location: Location
  ) { 
    this.url = Global.url;
    this.pageActual = 1;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.location.go('/users');
    this.title = 'Contacts';
    this.returnToContacts = false;
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

  createNewContact(): void {
    this._router.navigate(["create"]);
  }

  searchContact(nameOrLastName): void {
    this.returnToContacts = true;
    this._userService.getUsersByNameOrLastName(nameOrLastName).subscribe(
      response => {
        if(response.length) {
          this.location.go('/search-results/' + nameOrLastName);
          this.title = 'Results: ' + response.length;
          this.users = response;
        } else {
          this.title = 'No results for this search';
          this.users = response;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteContact(id) {
    this.users.forEach(element => {
      if (element.id == id) {
        this.user = element;
      }
    });
    this._userService.deleteUser(id).subscribe(
      response => {
        if (response) {
          this.users = this.users.filter(u=>u!==this.user);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
