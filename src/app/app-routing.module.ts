import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponentComponent } from "./landing-page-component/landing-page-component.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

const routes: Routes = [
    {path: 'facesnaps', component: FaceSnapListComponent},
    {path: '', component: LandingPageComponentComponent},
    {path: 'facesnaps/:id', component: SingleFaceSnapComponent}
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}