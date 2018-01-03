import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { ApiServerGuard } from './api-server/api-server-guard.service';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent, canActivate: [ApiServerGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ],
  providers: [ ApiServerGuard ]
})
export class AppRoutingModule {

}
