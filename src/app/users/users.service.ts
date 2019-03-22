import { Injectable } from '@angular/core';
import { USERS } from './user-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users = [...USERS];

  constructor(private router: Router) {}

  getAllUsers() {
    return [...this._users];
  }

  getUser(id: string) {
    const found = this._users.find(item => item.id.value === id);
    return { ...found };
  }

  deleteUser(id: string) {
    console.log('Before: ', this._users.length);
    const found = this._users.find(item => item.id.value === id);
    console.log('Eliminar: ', found);
    this._users = this._users.filter(item => item.id.value !== id);
    console.log('After: ', this._users.length);
    this.router.navigate(['/users']);
  }
}
