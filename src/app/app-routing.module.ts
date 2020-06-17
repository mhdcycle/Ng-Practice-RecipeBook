import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';



const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children:[
    {path:'', component: RecipeStartComponent},
    {path:'new', component: RecipeEditComponent},
    {path:':id', component: RecipedetailComponent},
    {path:':id/edit', component: RecipeEditComponent}
  ]},
  {path: 'shoppinglist', component: ShoppinglistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
