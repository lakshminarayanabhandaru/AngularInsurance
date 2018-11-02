import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() name: string;
  constructor() {
    console.log('inside child constructor');
    console.log('input property in constructor '+ this.name);
  }

  ngOnInit() {
    console.log('inside child ngOnInit');
    console.log('input property in child ngOnInit '+ this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('currentValue '+changes.name.currentValue);
    console.log('previousValue '+changes.name.previousValue);
  }

}
