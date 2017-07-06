import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  showAddUser = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAddUser() {
      this.showAddUser = !this.showAddUser
  }

}
