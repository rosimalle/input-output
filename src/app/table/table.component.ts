import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Output() data = new EventEmitter()
  
  str;
  storedata;

  constructor(private service:ServiceService) { }
  

  ngOnInit() {
    this.gotdetails()
  }

  gotdetails(){
    this.service.getdetails().subscribe(res =>
      this.storedata = res
    )
  }

  calldata(s){
    this.str = s
  this.data.emit(this.str)
}

}
