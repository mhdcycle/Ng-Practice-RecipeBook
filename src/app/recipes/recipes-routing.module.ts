import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { AuthGuard } from '../auth/auth-guard.service';

const reciperoutes: Routes = [
    {
        path: '', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipedetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(reciperoutes) 
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class RecipesRoutingModule { }