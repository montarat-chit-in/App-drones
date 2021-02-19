import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-pathumthani",
  templateUrl: "./pathumthani.page.html",
  styleUrls: ["./pathumthani.page.scss"],
})
export class PathumthaniPage implements OnInit {
  prathums: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.prathums = this.firestore
      .collection("drone-area-page-prathum")
      .valueChanges();
  }

  ngOnInit() {}
}
