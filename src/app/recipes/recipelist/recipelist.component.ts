import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {
 recipes: Recipe[];
 subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription=this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes= recipes; 
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
