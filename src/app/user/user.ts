import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserData } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) user!: UserData;
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
