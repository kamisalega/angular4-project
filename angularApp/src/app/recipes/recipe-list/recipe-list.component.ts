import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Testowy Przepis', 'To jest tylko test przepisu', 'https://c.pxhere.com/photos/2a/26/italian_food_cuisine_restaurant_italian_food_meal_healthy_dinner-1195677.jpg!d')
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
