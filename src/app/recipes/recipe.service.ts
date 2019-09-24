import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.jocooks.com/wp-content/uploads/2014/03/sweet-and-sour-chicken.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.jocooks.com/wp-content/uploads/2014/03/sweet-and-sour-chicken.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
