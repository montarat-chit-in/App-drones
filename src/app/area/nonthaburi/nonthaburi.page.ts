import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-nonthaburi",
  templateUrl: "./nonthaburi.page.html",
  styleUrls: ["./nonthaburi.page.scss"],
})
export class NonthaburiPage implements OnInit {
  nons: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.nons = this.firestore.collection("drone-area-page-non").valueChanges();
  }

  ngOnInit() {}
}
