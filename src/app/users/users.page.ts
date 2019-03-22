import { Component, OnInit } from '@angular/core';
import { USERS } from './user-data';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage implements OnInit {
  users: User[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }
}
