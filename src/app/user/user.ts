import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserData } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) user!: UserData;
  @Input({required: true}) isSelected!: boolean
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
