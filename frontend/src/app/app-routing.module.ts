import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadComponent} from "./upload/upload.component";
import {AllComponent} from "./all/all.component";
import {SingleComponent} from "./single/single.component";

const routes: Routes = [
  {
    path: "",
    component: AllComponent
  },
  {
    path: "p/:id",
    component: SingleComponent
  },
  {
    path: "add",
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
