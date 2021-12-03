import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {NgChartsModule} from 'ng2-charts';
import {MatTabsModule} from "@angular/material/tabs";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HomeComponent} from "./pages/home/home.component";
import {WorksCitedComponent} from "./pages/works-cited/works-cited.component"
import {
  BreakdownChartComponent,
  BreakdownSummaryComponent, FetchErrorComponent,
  MapBoxComponent,
  MapComponent, MapSidebarComponent, PointFeatureSummaryComponent,
  PovertyBreakdownSummaryComponent, SchoolFeatureSummaryComponent
} from "./components";
import { PovertyLevelComponent } from './poverty-level/poverty-level.component';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    MapBoxComponent,
    MapSidebarComponent,
    BreakdownChartComponent,
    PointFeatureSummaryComponent,
    BreakdownSummaryComponent,
    PovertyBreakdownSummaryComponent,
    SchoolFeatureSummaryComponent,
    FetchErrorComponent,
    WorksCitedComponent,
    PovertyLevelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDividerModule,
    NgChartsModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatGridListModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
