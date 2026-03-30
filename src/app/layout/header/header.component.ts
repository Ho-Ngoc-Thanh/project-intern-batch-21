import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  userData: any = null;

  dataTemp = {
    name: 'Alex Anny',
    email: 'alex.anny@example.com',
    img_Avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  ngOnInit() {
    this.userData = this.dataTemp;
    // console.log('data info: ', this.userData);
  }
}
