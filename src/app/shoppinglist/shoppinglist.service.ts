import { Ingrediant } from '../shared/ingrediant.module';

import { Subject } from 'rxjs/Subject';


export class ShoppinglistService {
    ingrediantsChanged = new Subject<Ingrediant[]>();
    startedEdititing= new Subject<number>();
    private ingrediants: Ingrediant[] = [
        new Ingrediant('Apples', 5),
        new Ingrediant('oranges', 10)
    ];
    getIngrediants() {
        return this.ingrediants;
    }
    getIngrediant(index: number){
        return this.ingrediants[index];
    }
    addIngrediant(ingrediant: Ingrediant) {
        this.ingrediants.push(ingrediant);
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
    updateIngrediant(index: number, newIngrediant: Ingrediant){
        this.ingrediants[index]= newIngrediant;
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
    addIngrediants(ingrediants: Ingrediant[]){
        // for(let ingrediant of ingrediants){
        //     this.addIngrediant(ingrediant);
        // }
        this.ingrediants.push(...ingrediants);
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
    deleteIngrediant(index: number){
        this.ingrediants.splice(index, 1);
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
}