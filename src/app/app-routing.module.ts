import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { HomeComponent } from './core/home/home.component';





const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'shoppinglist', component: ShoppinglistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
