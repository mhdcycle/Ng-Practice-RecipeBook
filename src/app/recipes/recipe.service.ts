import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.module';
import { ShoppinglistService } from '../shoppinglist/shoppinglist.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipeChanged= new Subject<Recipe[]>();
    
    private recipes: Recipe[] = [
        new Recipe('Hakka Noodles', 
        'this is a Hakka Noodles recipe', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
        [new Ingrediant('noodles',2),
         new Ingrediant('mexican Sauce',1)
        ]),
        new Recipe('chicken',
        'This is a chicken recipe',
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
        [new Ingrediant('chicken',2),
         new Ingrediant('chickenSauce',3)
        ])
    ];
    constructor(private shoppinglistService: ShoppinglistService){}
    setRecipes(recipes: Recipe[]){
        this.recipes=recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngrediantstoShoppinglist(ingrediants: Ingrediant[]){
        this.shoppinglistService.addIngrediants(ingrediants);
    }
    getRecipe(index: number){
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index]= newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
}