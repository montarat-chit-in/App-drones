import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "listdrone",
    loadChildren: () =>
      import("./listdrone/listdrone.module").then((m) => m.ListdronePageModule),
  },
  {
    path: "money",
    loadChildren: () =>
      import("./money/money.module").then((m) => m.MoneyPageModule),
  },
  {
    path: "area",
    loadChildren: () =>
      import("./area/area.module").then((m) => m.AreaPageModule),
  },
  {
    path: "rice",
    loadChildren: () =>
      import("./rice/rice.module").then((m) => m.RicePageModule),
  },
  {
    path: "splash",
    loadChildren: () =>
      import("./splash/splash.module").then((m) => m.SplashPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
