import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListItemComponent implements OnInit {

  @Input() user

  constructor() { }

  ngOnInit() {
  }

}
