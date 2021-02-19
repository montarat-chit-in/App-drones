import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-rice",
  templateUrl: "./rice.page.html",
  styleUrls: ["./rice.page.scss"],
})
export class RicePage implements OnInit {
  rices: Observable<any[]>;

  constructor(public firestore: AngularFirestore) {
    this.rices = this.firestore.collection("drone-rices-page").valueChanges();
  }

  ngOnInit() {}
}
