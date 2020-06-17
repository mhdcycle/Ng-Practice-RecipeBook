import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule, FormControl, AbstractControl  } from '@angular/forms';
import { ShoppinglistService } from './shoppinglist/shoppinglist.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipedetailComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipeitemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ShoppinglistService,RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
