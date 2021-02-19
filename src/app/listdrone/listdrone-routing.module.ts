import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListdronePage } from "./listdrone.page";

const routes: Routes = [
  {
    path: "",
    component: ListdronePage,
  },
  {
    path: "drone-type",
    loadChildren: () =>
      import("./drone-type/drone-type.module").then(
        (m) => m.DroneTypePageModule
      ),
  },
  {
    path: "drone-kraset",
    loadChildren: () =>
      import("./drone-kraset/drone-kraset.module").then(
        (m) => m.DroneKrasetPageModule
      ),
  },
  {
    path: "drone-benefit",
    loadChildren: () =>
      import("./drone-benefit/drone-benefit.module").then(
        (m) => m.DroneBenefitPageModule
      ),
  },
  {
    path: "drone-law",
    loadChildren: () =>
      import("./drone-law/drone-law.module").then((m) => m.DroneLawPageModule),
  },

  {
    path: "drone-mean",
    loadChildren: () =>
      import("./drone-mean/drone-mean.module").then(
        (m) => m.DroneMeanPageModule
      ),
  },
  {
    path: 'drone-typeofkraset',
    loadChildren: () => import('./drone-typeofkraset/drone-typeofkraset.module').then( m => m.DroneTypeofkrasetPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListdronePageRoutingModule {}
