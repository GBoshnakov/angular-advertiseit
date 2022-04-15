import { RouterModule, Routes } from "@angular/router";
import { AdvertDetailsComponent } from "./advert-details/advert-details.component";
import { AdvertsPageComponent } from "./adverts-page/adverts-page.component";
import { CreateNewComponent } from "./create-new/create-new.component";
import { EditAdvertComponent } from "./edit-advert/edit-advert.component";
import { MyAdvertsComponent } from "./my-adverts/my-adverts.component";

const routes: Routes = [
    {
        path: 'adverts',
        component: AdvertsPageComponent
    },
    {
        path: 'create',
        component: CreateNewComponent
    },
    {
        path: 'details',
        component: AdvertDetailsComponent
    },
    {
        path: 'edit',
        component: EditAdvertComponent
    },
    {
        path: 'my',
        component: MyAdvertsComponent
    }
]

export const AdvertRoutingModule = RouterModule.forChild(routes);