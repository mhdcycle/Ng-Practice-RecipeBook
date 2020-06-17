import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() recipe: Recipe;
  id: number
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id= +params['id'];
        this.recipe= this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddtoShoppinglist(){
    this.recipeService.addIngrediantstoShoppinglist(this.recipe.ingrediants);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../',this.id, 'edit'],{relativeTo: this.route})
  }
  onDeleteRecipe(){
     this.recipeService.deleteRecipe(this.id);
     this.router.navigate(['/recipes']);
  }

}
