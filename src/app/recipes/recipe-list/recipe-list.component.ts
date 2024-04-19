import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Non veg Biriyani', 'Behruz special biriyani', 'https://media.istockphoto.com/id/1058029096/photo/chicken-biryani.jpg?s=612x612&w=0&k=20&c=yVV1RArkYz1fXf0Blpeuwxt0yTHHDnlOURVMJmYgAeI='),
    new Recipe('Veg biriyani', 'Veg biriyani', 'https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg')
  ];
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  constructor() {

  }
  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }
}
