import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-drone-type",
  templateUrl: "./drone-type.page.html",
  styleUrls: ["./drone-type.page.scss"],
})
export class DroneTypePage implements OnInit {
  dronetypes: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.dronetypes = this.firestore
      .collection("drone-mean-page-type")
      .valueChanges();
  }

  ngOnInit() {}
}
