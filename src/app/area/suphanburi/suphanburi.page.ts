import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-suphanburi",
  templateUrl: "./suphanburi.page.html",
  styleUrls: ["./suphanburi.page.scss"],
})
export class SuphanburiPage implements OnInit {
  supans: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.supans = this.firestore
      .collection("drone-area-page-supan")
      .valueChanges();
  }

  ngOnInit() {}
}
