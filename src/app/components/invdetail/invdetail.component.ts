import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invdetail',
  templateUrl: './invdetail.component.html',
  styleUrls: ['./invdetail.component.scss']
})
export class InvdetailComponent implements OnInit {

  @Input('content')product:any;
  @Output('onViewClicked')onViewClicked = new EventEmitter<string>();
  isShow:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  viewClicked(){
    this.isShow = false
    this.onViewClicked.emit("clicked")

  }

}
