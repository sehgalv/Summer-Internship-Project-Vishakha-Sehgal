import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InvolvementComponent } from './involvement/involvement.component';
import { AcademicsComponent } from './academics/academics.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const appRoutes: Routes= [
  {path: '', component: HomeComponent},
  {path: 'academics', component: AcademicsComponent},
  {path: 'involvement', component: InvolvementComponent},
  {path: 'hobbies', component: HobbiesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InvolvementComponent,
    AcademicsComponent,
    HobbiesComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
