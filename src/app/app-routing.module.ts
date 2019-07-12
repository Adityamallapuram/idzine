import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BedroomComponent } from './components/gallery/bedroom/bedroom.component';
import { KitchenComponent } from './components/gallery/kitchen/kitchen.component';
import { LivingComponent } from './components/gallery/living/living.component';
import { WardrobeComponent } from './components/gallery/wardrobe/wardrobe.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'bedroom', component: BedroomComponent },
  { path: 'living', component: LivingComponent },
  { path: 'wardrobe', component: WardrobeComponent },
  { path: 'contact', component: ContactComponent }







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
