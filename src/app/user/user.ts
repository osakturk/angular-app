import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.id);
  }
}
