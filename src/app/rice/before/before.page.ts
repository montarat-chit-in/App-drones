import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-before",
  templateUrl: "./before.page.html",
  styleUrls: ["./before.page.scss"],
})
export class BeforePage implements OnInit {
  befores: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.befores = this.firestore
      .collection("drone-rice-before-page")
      .valueChanges();
  }

  ngOnInit() {}
}
