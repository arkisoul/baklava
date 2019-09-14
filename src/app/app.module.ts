import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CareerComponent } from './career/career.component';
import { CartComponent } from './cart/cart.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { CareerApplyComponent } from './career-apply/career-apply.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { InputNumberService } from './shared/services/input-number.service';
import { DishService } from './shared/services/dish.service';
import { CareerService } from './shared/services/career.service';
import { CartService } from './shared/services/cart.service';

import { ArrayObjectFilterPipe } from './pipes/array-object-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        MenuComponent,
        AboutusComponent,
        ContactusComponent,
        CareerComponent,
        CartComponent,
        TermsComponent,
        PrivacypolicyComponent,
        NoPageFoundComponent,
        CareerDetailComponent,
        CareerApplyComponent,
        ArrayObjectFilterPipe,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterializeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        InputNumberService,
        DishService,
        CareerService,
        CartService
    ],
    entryComponents: [
        SignupComponent,
        SigninComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
