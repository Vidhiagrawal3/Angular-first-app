import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { TestServ } from '../test.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  cars= [
    {name: 'honda', id:'001'},
    {name: 'Maruti', id:'002'},

  ];
ingredients: Ingredient[] = [
 new Ingredient('Apples',4),
new Ingredient('Tomatoes',7)
];
  constructor(private alertclick:TestServ) { }

  ngOnInit() {
  }
  NewIngredientAdded(Newingredient: Ingredient){
this.ingredients.push(Newingredient);
  }
  btnalt(){
     this.alertclick.goto();
  }
}
