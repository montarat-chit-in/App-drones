import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-after",
  templateUrl: "./after.page.html",
  styleUrls: ["./after.page.scss"],
})
export class AfterPage implements OnInit {
  afters: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.afters = this.firestore
      .collection("drone-rice-after-page")
      .valueChanges();
  }

  ngOnInit() {}
}
