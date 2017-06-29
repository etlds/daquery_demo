import { Routes } from "@angular/router"
import { QueriesToMeComponent } from "./app/queries-to-me/queries-to-me.component"
import { QueriesFromMeComponent } from "./app/queries-from-me/queries-from-me.component"
import { SitesComponent } from "./app/sites/sites.component"
import { UsersComponent } from "./app/users/users.component"

export const appRoutes:Routes = [
    { path: "queries-to-me", component: QueriesToMeComponent },
    { path: "queries-from-me", component: QueriesFromMeComponent },
    { path: "sites", component: SitesComponent },
    { path: "users", component: UsersComponent },
    { path: "", redirectTo: "/queries-to-me", pathMatch: 'full' },
]
