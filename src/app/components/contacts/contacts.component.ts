import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  contacts: [{}]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { contacts: [{}] }) => {
        this.contacts = data.contacts
      })
  }
}
