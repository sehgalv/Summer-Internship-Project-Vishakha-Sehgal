import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes} from '@angular/router'
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InvolvementComponent } from './involvement/involvement.component';
import { AcademicsComponent } from './academics/academics.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { InvolvementService } from './services/involvement.service';
import { AcademicsService } from './services/academics.service';
import { HobbiesService } from './services/hobbies.service';

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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    FlexLayoutModule,
    MatTabsModule,
    MatDividerModule
  ],
  providers: [InvolvementService, AcademicsService, HobbiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
