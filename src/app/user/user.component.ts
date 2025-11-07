import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserData } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
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
