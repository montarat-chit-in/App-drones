import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-nakhonpathom",
  templateUrl: "./nakhonpathom.page.html",
  styleUrls: ["./nakhonpathom.page.scss"],
})
export class NakhonpathomPage implements OnInit {
  nakhons: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.nakhons = this.firestore
      .collection("drone-area-page-nakhon")
      .valueChanges();
  }

  ngOnInit() {}
}
