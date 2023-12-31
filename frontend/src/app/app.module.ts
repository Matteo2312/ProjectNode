import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FrancaisComponent } from './francais/francais.component';
import { MathematiqueComponent } from './mathematique/mathematique.component';
import { HistoireComponent } from './histoire/histoire.component';
import { PhysiqueComponent } from './physique/physique.component';
import { PhilosophieComponent } from './philosophie/philosophie.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrancaisComponent,
    MathematiqueComponent,
    HistoireComponent,
    PhysiqueComponent,
    PhilosophieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
