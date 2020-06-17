import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.module';
import { ShoppinglistService } from './shoppinglist.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingrediants: Ingrediant[];
  private subscription: Subscription;
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit():void{
    this.ingrediants = this.shoppinglistService.getIngrediants();
    this.subscription=this.shoppinglistService.ingrediantsChanged.subscribe(
      (ingrediants: Ingrediant[]) => {
        this.ingrediants = this.ingrediants;
      }
    );
  }
  onEditItem(index: number){
    this.shoppinglistService.startedEdititing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
