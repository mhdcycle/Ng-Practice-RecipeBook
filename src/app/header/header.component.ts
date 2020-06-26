import { Component } from "@angular/core";
import { DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html' 

})

export class HeaderComponent{
    constructor(private dataStorage: DataStorageService){}
    onSave(){
        this.dataStorage.storeRecipes().subscribe(
            (response: Response)=>{
                console.log(response)
            }
        );
    }
    onFetch(){
        this.dataStorage.getRecipes();
    }
}