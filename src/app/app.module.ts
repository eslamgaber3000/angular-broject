import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoveisComponent } from './moveis/moveis.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeobleComponent } from './peoble/peoble.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { LogautComponent } from './logaut/logaut.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS }from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MoveiDetailsComponent } from './movei-details/movei-details.component';
import { WhachPipe } from './whach.pipe';
import { OverviewPipe } from './overview.pipe';
import { SearshPipe } from './searsh.pipe'
import { TokenInterceptor } from './token.interceptor';
import { Token } from '@angular/compiler';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    MoveisComponent,
    TvshowComponent,
    PeobleComponent,
    NetworkComponent,
    LoginComponent,
    RegesterComponent,
    NotfoundComponent,
    DetailsComponent,
    LogautComponent,
    FooterComponent,
    MediaItemComponent,
    MoveiDetailsComponent,
    WhachPipe,
    OverviewPipe,
    SearshPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  HttpClientModule,FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
