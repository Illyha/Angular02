import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ownerName = 'Illyha';
  languages = ['c#','c++','Pascal','Vasic','Assembler'];
  constructor() { }

  ngOnInit() {
  }

}
