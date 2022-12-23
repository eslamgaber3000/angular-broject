import { AuthintcationGuard } from './authintcation.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LogautComponent } from './logaut/logaut.component';
import { LoginComponent } from './login/login.component';
import { MoveisComponent } from './moveis/moveis.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeobleComponent } from './peoble/peoble.component';
import { RegesterComponent } from './regester/regester.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthintcationGuard],component:HomeComponent},
  {path:'about',canActivate:[AuthintcationGuard],component:AboutComponent},
  {path:'moveis',canActivate:[AuthintcationGuard],component:MoveisComponent},
  {path:'tvshow', canActivate:[AuthintcationGuard],component:TvshowComponent},
  {path:'peoble',canActivate:[AuthintcationGuard],component:PeobleComponent},
  {path:'network',canActivate:[AuthintcationGuard],component:NetworkComponent},
  {path:'login',component:LoginComponent},
  {path:'details/:id/:media_type',canActivate:[AuthintcationGuard],component:DetailsComponent},
  {path:'regester',component:RegesterComponent},
  {path:'logaut',component:LoginComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
