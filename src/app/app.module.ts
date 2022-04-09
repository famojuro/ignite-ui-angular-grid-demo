import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfragisticsPagingComponent } from './infragistics-paging/infragistics-paging.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxGridModule, IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule
} from "igniteui-angular";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {IgxPreventDocumentScrollModule} from "./directives/prevent-scroll.directive";
import { InfragisticsSortingComponent } from './infragistics-sorting/infragistics-sorting.component';
import { InfragisticsFilteringComponent } from './infragistics-filtering/infragistics-filtering.component';
import { InfragisticsEditingComponent } from './infragistics-editing/infragistics-editing.component';

@NgModule({
  declarations: [
    AppComponent,
    InfragisticsPagingComponent,
    NavbarComponent,
    InfragisticsSortingComponent,
    InfragisticsFilteringComponent,
    InfragisticsEditingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxPreventDocumentScrollModule,
    //IgxScrollInertiaModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
