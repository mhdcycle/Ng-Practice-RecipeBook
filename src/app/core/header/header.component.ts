import { Component } from "@angular/core";
import { DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import { AuthService } from '../../auth/auth.service';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html' 

})

export class HeaderComponent{
    constructor(private dataStorage: DataStorageService, public authService: AuthService){}
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
    onLogout(){
        this.authService.logout();
    }
}