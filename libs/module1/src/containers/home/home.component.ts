import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { first, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromRouteMgr from '@cdIssue/route-mgr';
import { Go } from '@cdIssue/route-mgr';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg = "";

  constructor(
    private store:Store<fromRouteMgr.State>,
    private afAuth: AngularFireAuth,
    private ngZone:NgZone
  ) {}

  ngOnInit() {
    Observable.fromPromise(this.afAuth.auth.signOut()).pipe(first()).subscribe();
  }

  onAfterLogin() {
    this.msg = "Waiting for login to complete...";
    this.afAuth.auth.setPersistence( firebase.auth.Auth.Persistence.SESSION);
    Observable.fromPromise(
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    )
    .pipe(
      first(),
      map( authData => {
        this.msg = "";
        this.goToModule2();
      })
    ).subscribe();
  }

  goToModule2() {
    this.store.dispatch(new Go({ path: ['/module2'] }));
  }
}
