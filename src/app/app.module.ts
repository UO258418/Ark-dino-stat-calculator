import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinoComponent } from './dino/dino.component';
import { DinoListComponent } from './dino-list/dino-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DinoComponent,
    DinoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
