import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-drone-law",
  templateUrl: "./drone-law.page.html",
  styleUrls: ["./drone-law.page.scss"],
})
export class DroneLawPage implements OnInit {
  dronelaws: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.dronelaws = this.firestore
      .collection("drone-mean-page-law")
      .valueChanges();
  }

  ngOnInit() {}
}
