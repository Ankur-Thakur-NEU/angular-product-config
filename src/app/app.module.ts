import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { NftprojectsComponent } from './nftprojects/nftprojects.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { FoundationComponent } from './foundation/foundation.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamComponent } from './team/team.component';
import { TokenComponent } from './token/token.component';
import { FooterComponent } from './footer/footer.component';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { LitepaperComponent } from './litepaper/litepaper.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPreviewComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    RoadmapComponent,
    NftprojectsComponent,
    FoundationComponent,
    TeamComponent,
    TokenComponent,
    FooterComponent,
    LitepaperComponent
  ],
  imports: [
    BrowserModule,
    NgtCoreModule,
    RouterModule,
    BrowserAnimationsModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    CarouselModule,
    MatGridListModule,
    MatCardModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      faSquare,
      faCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }
 }
