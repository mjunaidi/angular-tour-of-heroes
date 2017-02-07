import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// modules
import { UtilModule } from './util/util.module';

import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent }      from './hero/heroes.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
import { HeroService }          from './hero/hero.service';
import { HeroSearchComponent }  from './hero/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
