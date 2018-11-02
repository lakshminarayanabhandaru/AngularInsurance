import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, AfterViewInit {
  user:string;

  ngAfterViewInit(): void {
    console.log('inside ngAfterViewInit');
  }

  constructor() {
    console.log('inside constructor');
  }

  ngOnInit() {
    console.log('inside ngOnInit');
  }

}
