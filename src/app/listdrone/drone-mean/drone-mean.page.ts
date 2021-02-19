import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-drone-mean",
  templateUrl: "./drone-mean.page.html",
  styleUrls: ["./drone-mean.page.scss"],
  // providers: [FirebaseService],
})
export class DroneMeanPage implements OnInit {
  dronemeans: Observable<any[]>;

  constructor(public firestore: AngularFirestore) {
    this.dronemeans = this.firestore
      .collection("drone-mean-page-mean")
      .valueChanges();
  }
  ngOnInit() {}
}
