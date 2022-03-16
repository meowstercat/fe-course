import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    const nav = document.querySelector('.nav');
    if (window.pageYOffset > 100) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  }
}
