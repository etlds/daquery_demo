import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  @ViewChild('staticModal') modal:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  showModal() {
      this.modal.show();
  }

}
