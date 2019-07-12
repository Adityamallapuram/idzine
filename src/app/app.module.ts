import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import {
//   MatButtonModule,
//   MatCheckboxModule,
//   MatToolbarModule,
//   MatSidenavModule, MatIconModule, MatListModule

// } from '@angular/material';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { LayoutModule } from '@angular/cdk/layout';
import { KitchenComponent } from './components/gallery/kitchen/kitchen.component';
import { LivingComponent } from './components/gallery/living/living.component';
import { BedroomComponent } from './components/gallery/bedroom/bedroom.component';
import { WardrobeComponent } from './components/gallery/wardrobe/wardrobe.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { WhatwedoComponent } from './components/whatwedo/whatwedo.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    NavbarComponent,
    KitchenComponent,
    LivingComponent,
    BedroomComponent,
    WardrobeComponent,
    WhatwedoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // MatToolbarModule,
    // MatCheckboxModule,
    // MatButtonModule,
    // MatSidenavModule,
    // LayoutModule,
    // MatIconModule,
    // MatListModule,
    // AngularFontAwesomeModule,
    // NgbModule,
    // NgbCollapseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
