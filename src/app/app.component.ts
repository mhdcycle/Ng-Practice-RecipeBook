import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth'
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RecipeBook';
  loadedFeature='recipe';
  onNavigate(feature: string){
    this.loadedFeature=feature;
  }
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAC9rsEEdUTa3a6X3mHSvWWfrpDRPK3qYo",
      authDomain: "ng-recipe-book-c683e.firebaseapp.com"
    });
  }
}
