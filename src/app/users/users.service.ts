import { Injectable } from '@angular/core';
import { USERS } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users = [...USERS];

  constructor() {}

  getAllUsers() {
    return [...this._users];
  }

  getUser(id: string) {
    const found = this._users.find(item => item.id.value === id);
    return { ...found };
  }
}
