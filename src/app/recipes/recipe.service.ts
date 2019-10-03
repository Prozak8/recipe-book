import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Carbonara',
      'Creamy, Bacony pasta',
      'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Pasta', 5)]
    ),
    new Recipe(
      'Sweet & Sour Chicken',
      'An instant crowd pleaser',
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Sweetsourchickensoaked.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Sauce', 3)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
