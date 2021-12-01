import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages';
import {WorksCitedComponent} from "./pages/works-cited/works-cited.component";
import {PovertyLevelComponent} from './poverty-level/./poverty-level.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'works-cited', component: WorksCitedComponent},
  { path: 'poverty-level', component: PovertyLevelComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
