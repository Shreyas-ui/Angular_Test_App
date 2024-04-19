import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Mango', 2),
    new Ingredients('banana', 2)
  ];
  constructor() {

  }
  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingredients)
  {
    this.ingredients.push(ingredient);
  }

}
