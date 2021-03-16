import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-codes',
  templateUrl: './show-codes.component.html',
  styleUrls: ['./show-codes.component.sass']
})
export class ShowCodesComponent implements OnInit {

  dataParse: Data | undefined;

  constructor(
  ) { }

  ngOnInit(): void {
    const data = sessionStorage.getItem('array'); 
    this.dataParse = JSON.parse(data!);    
  }

}

export interface Data {
  exist: [];
  noExist: [];
}
