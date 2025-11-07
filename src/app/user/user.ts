import { Component, EventEmitter, Input, Output } from '@angular/core';

// type UserObject = {
//     id: string;
//     avatar: string;
//     name: string;
// }

interface UserObject {
    id: string;
    avatar: string;
    name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) user!: UserObject;
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
