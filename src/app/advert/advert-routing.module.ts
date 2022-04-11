import { RouterModule, Routes } from "@angular/router";
import { AdvertsPageComponent } from "./adverts-page/adverts-page.component";

const routes: Routes = [
    {
        path: 'adverts',
        component: AdvertsPageComponent
    }
]

export const AdvertRoutingModule = RouterModule.forChild(routes);