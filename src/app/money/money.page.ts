import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { LoadingController } from "@ionic/angular";
import { Observable } from "rxjs";
@Component({
  selector: "app-money",
  templateUrl: "./money.page.html",
  styleUrls: ["./money.page.scss"],
})
export class MoneyPage implements OnInit {
  moneys: Observable<any[]>;

  constructor(public firestore: AngularFirestore) {
    this.moneys = this.firestore.collection("drone-moneys-page").valueChanges();
  }

  ngOnInit() {}
}
