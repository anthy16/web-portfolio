import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsModule } from './settings/settings.module';
import { StoreModule } from '@ngrx/store';
import { layoutReducer } from './store/reducers/layout.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingsModule,
    SharedModule,
    StoreModule.forRoot({ layout: layoutReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
