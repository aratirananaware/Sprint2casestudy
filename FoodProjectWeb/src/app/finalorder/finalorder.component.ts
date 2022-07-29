import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalorder',
  templateUrl: './finalorder.component.html',
  styleUrls: ['./finalorder.component.css']
})
export class FinalorderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}