import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-drone-kraset",
  templateUrl: "./drone-kraset.page.html",
  styleUrls: ["./drone-kraset.page.scss"],
})
export class DroneKrasetPage implements OnInit {
  dronekasets: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.dronekasets = this.firestore
      .collection("drone-mean-page-kaset")
      .valueChanges();
  }

  ngOnInit() {}
}
