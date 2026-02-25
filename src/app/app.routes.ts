import { Routes } from "@angular/router"
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component"
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component"
import { NotFoundComponent } from "./shared/components/not-found/not-found.component"

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent
    // canActivate:[authGuard]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./features/auth/auth.routes").then((feature) => feature.routes)
  },
  {
    path: "**",
    pathMatch: "full",
    component: NotFoundComponent
  }
]
