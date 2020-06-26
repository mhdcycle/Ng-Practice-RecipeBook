import { NgModule } from '@angular/core';
import { ShoppinglistComponent } from './shoppinglist.component';
import { ShoppingeditComponent } from './shoppingedit/shoppingedit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShoppinglistComponent,
        ShoppingeditComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule{}