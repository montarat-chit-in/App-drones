import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-ayutthaya",
  templateUrl: "./ayutthaya.page.html",
  styleUrls: ["./ayutthaya.page.scss"],
})
export class AyutthayaPage implements OnInit {
  aryuts: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.aryuts = this.firestore
      .collection("drone-area-page-aryut")
      .valueChanges();
  }

  ngOnInit() {}
}
