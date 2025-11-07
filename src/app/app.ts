import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId?: string;
  
  get selectedUser(){
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
