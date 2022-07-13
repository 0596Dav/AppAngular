import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Modules/auth/login-page/login-page.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { ValidationsComponent } from './Modules/auth/validations/validations.component';
import { MarcadoresComponent } from './Modules/favoritos/marcadores/marcadores.component';
import { HistoryMenuComponent } from './Modules/history/history-menu/history-menu.component';
import { FooterComponent } from './Modules/home/footer/footer.component';
import { HeaderComponent } from './Modules/home/header/header.component';
import { TracklistComponent } from './Modules/tracks/tracklist/tracklist.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [


  {
    path: "",
    component: MycomponentComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "validations",
    component: ValidationsComponent
  },
  {
    path: "header",
    component: HeaderComponent
  },
  {
    path: "footer",
    component: FooterComponent
  },
  {
    path: "tracklist",
    component: TracklistComponent
  },
  {
    path: "historymenu",
    component: HistoryMenuComponent
  },
  {
    path: "marcadores",
    component: MarcadoresComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
