import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// import {
//   MatToolbarModule,
//   MatSidenavModule,
//   MatListModule,
//   MatButtonModule,
//   MatIconModule,
// } from '@angular/material';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; */

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMainComponent } from './app-main/app-main.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    FlexLayoutModule,
    /* FontAwesomeModule, */
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    FootBarComponent,
    AppMainComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
