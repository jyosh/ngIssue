import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Go } from '@cdIssue/route-mgr';
import * as fromRouteMgr from '@cdIssue/route-mgr';

@Component({
  selector: 'module2home',
  templateUrl: './module2home.component.html',
  styleUrls: ['./module2home.component.css']
})
export class Module2homeComponent implements OnInit {
  constructor(private store:Store<fromRouteMgr.State>) { }
  count;

  ngOnInit() {
    this.count = 1;
  }

  onClickModule1() {
    this.store.dispatch(new Go({ path: ['/module1'] }));
  }

  increment(){
    this.count++;
  }
}
