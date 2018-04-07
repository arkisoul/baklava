import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { MenuComponent } from '../menu/menu.component';
import { PrivacypolicyComponent } from '../privacypolicy/privacypolicy.component';
import { TermsComponent } from '../terms/terms.component';
import { CartComponent } from '../cart/cart.component';
import { CareerComponent } from '../career/career.component';
import { CareerDetailComponent } from '../career-detail/career-detail.component';
import { CareerApplyComponent } from '../career-apply/career-apply.component';
import { NoPageFoundComponent } from '../no-page-found/no-page-found.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'privacypolicy', component: PrivacypolicyComponent },
    { path: 'cart', component: CartComponent },
    { path: 'career', component: CareerComponent },
    { path: 'career/apply', component: CareerApplyComponent },
    { path: 'career/:id', component: CareerDetailComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: NoPageFoundComponent }
]
