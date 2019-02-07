import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/home-page", pathMatch: "full" },
  { path: "home-page", component: HomePageComponent },
  { path: "films", component: HomePageComponent },
  { path: "serials", component: HomePageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
