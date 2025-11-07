import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId?: string;
  
  get selectedUser(){
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)
  }

  onSelectUser(id: string) {
    // this has the emitted result by user component
    this.selectedUserId = id
  }
}
