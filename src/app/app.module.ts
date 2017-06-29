import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WidgetComponent } from './widget/widget.component';
import { QueriesToMeComponent } from './queries-to-me/queries-to-me.component';
import { QueriesToMeTableComponent } from './queries-to-me/queries-to-me-table/queries-to-me-table.component';
import { appRoutes } from '../routes';
import { QueriesFromMeComponent } from './queries-from-me/queries-from-me.component';
import { SitesComponent } from './sites/sites.component';
import { UsersComponent } from './users/users.component';
import { QueriesFromMeTableComponent } from './queries-from-me/queries-from-me-table/queries-from-me-table.component';
import { SiteComponent } from './sites/site/site.component';
import { LocalUserComponent } from './users/local-user/local-user.component';
import { AddUserComponent } from './users/add-user/add-user.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    WidgetComponent,
    QueriesToMeComponent,
    QueriesToMeTableComponent,
    QueriesFromMeComponent,
    SitesComponent,
    UsersComponent,
    QueriesFromMeTableComponent,
    SiteComponent,
    LocalUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
