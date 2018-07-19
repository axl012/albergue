// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModuleModule } from './custom-material-module.module';
import { AppRoutingModule } from './app-routing.module';

// JWT
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_interceptors/token.interceptor';

// Components
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './main-module/hero-section/hero-section.component';
import { DetailsSectionComponent } from './main-module/details-section/details-section.component';
import { MainSectionComponent } from './main-module/main-section/main-section.component';
import { FooterSectionComponent } from './main-module/footer-section/footer-section.component';
import { ProjectCardComponent } from './shared/cards/project-card/project-card.component';
import { DonationCardComponent } from './shared/cards/donation-card/donation-card.component';
// import { LoginComponent } from './admin-module/login/login.component';
// import { AdminPanelComponent } from './admin-module/admin-panel/admin-panel.component';
// import { ProjectFormComponent } from './admin-module/project-form/project-form.component';
import { ContainerComponent } from './shared/container/container.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EventCardComponent } from './shared/cards/event-card/event-card.component';
// import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';
import { TabsSectionComponent } from './main-module/tabs-section/tabs-section.component';
// import { DonationFormComponent } from './admin-module/donation-form/donation-form.component';
// import { EventFormComponent } from './admin-module/event-form/event-form.component';
import { DonationsDetailsComponent } from './main-module/donations-details/donations-details.component';
import { EventsDetailsComponent } from './main-module/events-details/events-details.component';
import { ProjectsDetailsComponent } from './main-module/projects-details/projects-details.component';
// import { AdminDashboardComponent } from './admin-module/admin-dashboard/admin-dashboard.component';
import { AlertComponent } from './_directives/alert/alert.component';

// Services
import {
  ProjectService,
  DonationService,
  EventsService,
  AuthenticationService,
  AlertService,
  FormatDateService
  } from './_services/';
// Guards
import { AuthGuard } from './_guards/auth-guard';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    DetailsSectionComponent,
    MainSectionComponent,
    FooterSectionComponent,
    ProjectCardComponent,
    DonationCardComponent,
    // LoginComponent,
    // AdminPanelComponent,
    // ProjectFormComponent,
    ContainerComponent,
    NavbarComponent,
    EventCardComponent,
    // NavbarAdminComponent,
    TabsSectionComponent,
    // DonationFormComponent,
    // EventFormComponent,
    DonationsDetailsComponent,
    EventsDetailsComponent,
    ProjectsDetailsComponent,
    // AdminDashboardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomMaterialModuleModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    ProjectService,
    DonationService,
    EventsService,
    AuthenticationService,
    FormatDateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
