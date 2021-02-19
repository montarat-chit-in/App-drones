import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit {
  constructor(public route: Router) {
    setTimeout(() => {
      this.route.navigateByUrl("home");
    }, 1000);
  }

  ngOnInit() {}
}
