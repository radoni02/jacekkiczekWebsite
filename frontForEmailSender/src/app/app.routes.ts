import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from './components/place/place.component';
import { NgModule } from '@angular/core';
import { FrontPanelComponent } from './components/front-panel/front-panel.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ZyciorysComponent } from './components/zyciorys/zyciorys.component';
import { PostulatyComponent } from './components/postulaty/postulaty.component';
import { WyzwaniaKomunikacyjneComponent } from './components/wyzwania-komunikacyjne/wyzwania-komunikacyjne.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';

export const routes: Routes = [
    {path:'p',component: PlaceComponent},
    {path:'',component: FrontPanelComponent},
    {path:'photos',component: PhotosComponent},
    {path:'zyciorys',component: ZyciorysComponent},
    {path:'postulaty',component:PostulatyComponent},
    {path:'wyzwania',component:WyzwaniaKomunikacyjneComponent},
    {path:'kontakt',component:KontaktComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }