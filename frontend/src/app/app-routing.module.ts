import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrancaisComponent } from './francais/francais.component';
import { MathematiqueComponent } from './mathematique/mathematique.component';
import { HistoireComponent } from './histoire/histoire.component';
import { PhysiqueComponent } from './physique/physique.component';
import { PhilosophieComponent } from './philosophie/philosophie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'francais', component: FrancaisComponent },
  { path: 'mathematique', component: MathematiqueComponent },
  { path: 'histoire', component: HistoireComponent },
  { path: 'physique', component: PhysiqueComponent },
  { path: 'philosophie', component: PhilosophieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
