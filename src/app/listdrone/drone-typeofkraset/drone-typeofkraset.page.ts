import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-drone-typeofkraset",
  templateUrl: "./drone-typeofkraset.page.html",
  styleUrls: ["./drone-typeofkraset.page.scss"],
})
export class DroneTypeofkrasetPage implements OnInit {
  dronetypeofkrasets: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.dronetypeofkrasets = this.firestore
      .collection("drone-mean-page-kaset-type")
      .valueChanges();
  }

  ngOnInit() {}
}
