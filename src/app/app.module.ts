import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForatoComponent } from './pages/forato/forato.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { DoomComponent } from './pages/doom/doom.component';

@NgModule({
  declarations: [
    AppComponent,
    ForatoComponent,
    TablaComponent,
    ActualizarComponent,
    DoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
