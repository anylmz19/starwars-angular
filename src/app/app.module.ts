import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HOMEComponent } from './home/home.component';
import { FilimsComponent } from './filims/filims.component';
import { Filims2Component } from './filims/filims2/filims2.component';
import { Filims3Component } from './filims/filims3/filims3.component';
import { Filims4Component } from './filims/filims4/filims4.component';
import { Filims5Component } from './filims/filims5/filims5.component';
import { WorldComponent } from './world/world.component';
import { Vehicles1Component } from './vehicles/vehicles1/vehicles1.component';
import { Vehicles2Component } from './vehicles/vehicles2/vehicles2.component';
import { Vehicles12Component } from './vehicles/vehicles12/vehicles12.component';
import { Character3Component } from './character/character3/character3.component';
import { World9Component } from './world/world9/world9.component';
import { Character4Component } from './character/character4/character4.component';
import { Vehicles13Component } from './vehicles/vehicles13/vehicles13.component';
import { Vehicles30Component } from './vehicles/vehicles30/vehicles30.component';
import { World2Component } from './world/world2/world2.component';
import { Character5Component } from './character/character5/character5.component';
import { Filims6Component } from './filims/filims6/filims6.component';
import { Character6Component } from './character/character6/character6.component';
import { Character7Component } from './character/character7/character7.component';
import { Character8Component } from './character/character8/character8.component';
import { Character9Component } from './character/character9/character9.component';

import { World20Component } from './world/world20/world20.component';
import { Vehicles38Component } from './vehicles/vehicles38/vehicles38.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HOMEComponent,
    FilimsComponent,
    Filims2Component,
    Filims3Component,
    Filims4Component,
    Filims5Component,
    WorldComponent,
    Vehicles1Component,
    Vehicles2Component,
    Vehicles12Component,
    Character3Component,
    World9Component,
    Character4Component,
    Vehicles13Component,
    Vehicles30Component,
    World2Component,
    Character5Component,
    Filims6Component,
    Character6Component,
    Character7Component,
    Character8Component,
    Character9Component,
  
    World20Component,
    Vehicles38Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
