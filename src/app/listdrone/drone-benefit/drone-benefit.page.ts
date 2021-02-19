import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-drone-benefit",
  templateUrl: "./drone-benefit.page.html",
  styleUrls: ["./drone-benefit.page.scss"],
})
export class DroneBenefitPage implements OnInit {
  droneprofits: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.droneprofits = this.firestore
      .collection("drone-mean-page-benefit")
      .valueChanges();
  }

  ngOnInit() {}
}
