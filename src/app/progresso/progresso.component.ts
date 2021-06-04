import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.less']
})
export class ProgressoComponent implements OnInit {

  @Input() public nProgresso:number = 25

  constructor() { }
  
  ngOnInit(): void {
  }

}
