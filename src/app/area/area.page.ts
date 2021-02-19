import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-area",
  templateUrl: "./area.page.html",
  styleUrls: ["./area.page.scss"],
})
export class AreaPage implements OnInit {
  areas: Observable<any[]>;
  constructor(public firestore: AngularFirestore) {
    this.areas = this.firestore.collection("drone-area-page").valueChanges();
  }

  ngOnInit() {}
}
