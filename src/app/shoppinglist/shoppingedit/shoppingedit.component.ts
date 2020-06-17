import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.module';
import { ShoppinglistService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';





@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit , OnDestroy{
  @ViewChild('f') slForm: NgForm;
  editMode=false;
  editedItemIndex: number;
  editedItem: Ingrediant;
  subscription: Subscription;
  constructor(private shopinglistService: ShoppinglistService) { }

  ngOnInit(): void {
    this.subscription=this.shopinglistService.startedEdititing.subscribe(
      (index: number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shopinglistService.getIngrediant(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  onSubmit(form: NgForm) {
    const value=form.value;
    const newIngrediant = new Ingrediant(value.name, value.amount);
    if(this.editMode){
      this.shopinglistService.updateIngrediant(this.editedItemIndex, newIngrediant);
    }else{
      this.shopinglistService.addIngrediant(newIngrediant);
    }
    //this.shopinglistService.addIngrediant(newIngrediant);
    this.editMode=false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.shopinglistService.deleteIngrediant(this.editedItemIndex);
    this.onClear();
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
