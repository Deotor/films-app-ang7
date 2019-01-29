import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/home-page", pathMatch: "full" },
  { path: "home-page:request_token", component: HomePageComponent },
  { path: "home-page", component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
