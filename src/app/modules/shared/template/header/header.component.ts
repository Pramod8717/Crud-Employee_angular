import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idfclogo: string = 'assets/images/idfc_logo.png'
  constructor() { }

  ngOnInit(): void {
  }

}
