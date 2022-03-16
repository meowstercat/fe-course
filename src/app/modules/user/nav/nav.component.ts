import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isVisible = false;
  isDarkMode = true;
  list = [
    {
      name: 'Dashboard',
      path: '/Dashboard',
    },
    {
      name: 'Course',
      path: '/Course',
    },
    {
      name: 'Pricing',
      path: '/Course',
    },
    {
      name: 'Blog',
      path: '/Course',
    },
    {
      name: 'Videos',
      path: '/Course',
    },
  ];

  constructor() {
  }

  // constructor()

  ngOnInit(): void {
  }

  changeTheme() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.getElementById('body');
    if (this.isDarkMode) {
      body.classList.add('dark-theme');
    }
    if (!this.isDarkMode) {
      body.classList.remove('dark-theme');
    }
    this.currentIcon();
  }

  currentIcon() {
    return this.isDarkMode ? 'fa fa-sun-o' : 'fa fa-moon-o';
  }
}
