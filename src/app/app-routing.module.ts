import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { NftprojectsComponent } from './nftprojects/nftprojects.component';
import { FoundationComponent } from './foundation/foundation.component';
import { TeamComponent } from './team/team.component';
import { TokenComponent } from './token/token.component';
import { LitepaperComponent } from './litepaper/litepaper.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'nftprojects', component: NftprojectsComponent },
  { path: 'foundation', component: FoundationComponent },
  { path: 'team', component: TeamComponent },
  { path: 'token', component: TokenComponent },
  { path: 'litepaper', component: LitepaperComponent },
  { path: 'careers', component: CareersComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      enableTracing: true, // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
