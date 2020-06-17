import { Injectable } from '@angular/core';

import { RecipeService } from '../recipes/recipe.service';
// import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService{
    constructor(private http: Http, private recipeService: RecipeService){}
    storeRecipes(){
        return this.http.put('https://ng-recipe-book-c683e.firebaseio.com/recipes.json',this.recipeService.getRecipes());
    }
    getRecipes(){
        return this.http.get('https://ng-recipe-book-c683e.firebaseio.com/recipes.json').map(
            (response: Response)=>{
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingrediants']){
                        console.log(recipe);
                        recipe['ingrediants']=[];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}